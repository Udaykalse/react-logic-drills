#!/usr/bin/env python3
import requests
import json
import time
from datetime import datetime

def wait_for_api():
    """Wait for API to be ready"""
    print("Waiting for email checker API to be ready...")
    max_attempts = 30
    for i in range(max_attempts):
        try:
            response = requests.get('http://localhost:8080/health', timeout=2)
            if response.status_code == 200:
                print("✓ API is ready!\n")
                return True
        except:
            pass
        print(f"Attempt {i+1}/{max_attempts}...", end='\r')
        time.sleep(2)
    print("\n✗ API not responding. Check Docker container.")
    return False

def check_email(email, retries=3):
    """Check a single email with retry logic"""
    for attempt in range(retries):
        try:
            response = requests.post(
                'http://localhost:8080/v0/check_email',
                json={'to_email': email},
                timeout=60
            )
            
            if response.status_code == 200:
                return response.json()
        except requests.exceptions.Timeout:
            if attempt < retries - 1:
                time.sleep(5)
            else:
                return {'error': 'timeout'}
        except Exception as e:
            return {'error': str(e)}
    
    return {'error': 'max_retries_exceeded'}

# Wait for API
if not wait_for_api():
    exit(1)

# Read emails
with open('emails.txt', 'r') as f:
    emails = [line.strip() for line in f if line.strip()]

print(f"Total emails to check: {len(emails)}")
print("Starting email verification...\n")

results = []
valid_emails = []
invalid_emails = []
unknown_emails = []

for i, email in enumerate(emails, 1):
    print(f"[{i}/{len(emails)}] {email:<40} ", end="")
    
    result = check_email(email)
    
    if 'error' in result:
        print(f"ERROR: {result['error']}")
    else:
        is_reachable = result.get('is_reachable', 'unknown')
        results.append({'email': email, 'is_reachable': is_reachable, 'full_result': result})
        
        if is_reachable == 'safe':
            valid_emails.append(email)
            print("✓ VALID")
        elif is_reachable == 'invalid':
            invalid_emails.append(email)
            print("✗ INVALID")
        else:
            unknown_emails.append(email)
            print("? UNKNOWN")
    
    time.sleep(1)

# Save results
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
with open(f'results_{timestamp}.json', 'w') as f:
    json.dump(results, f, indent=2)

with open(f'valid_emails_{timestamp}.txt', 'w') as f:
    f.write('\n'.join(valid_emails))

print(f"\n✓ Complete! Valid: {len(valid_emails)}, Invalid: {len(invalid_emails)}, Unknown: {len(unknown_emails)}")
