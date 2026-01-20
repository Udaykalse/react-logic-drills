enum Status {
    Pending = "PENDING",
    Success = "SUCCESS",
    Failed = "FAILED"
}

function getStatusMessage(status: Status): string {
    if (status === Status.Success) {
        return "✅ Task completed!";
    } else if (status === Status.Pending) {
        return "⏳ Task is still in progress...";
    } else {
        return "❌ Task failed.";
    }
}

const currentStatus = Status.Success;
console.log(getStatusMessage(currentStatus));

const anotherStatus = Status.Pending;
console.log(getStatusMessage(anotherStatus));