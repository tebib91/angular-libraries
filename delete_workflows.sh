REPO="tebib91/angular-libraries"  # Replace with your repo
TOKEN=""  # Replace with your GitHub token

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "jq could not be found, please install it and try again."
    exit 1
fi

# Fetch workflow runs
workflow_runs=$(curl -s -H "Authorization: token $TOKEN" \
"https://api.github.com/repos/$REPO/actions/runs?per_page=100" | jq -r '.workflow_runs[].id')

# Check if any workflow runs were found
if [ -z "$workflow_runs" ]; then
    echo "No workflow runs found or failed to fetch workflow runs."
    exit 1
fi

# Loop through each run ID and delete
for run_id in $workflow_runs; do
    echo "Deleting workflow run ID: $run_id"
    curl -X DELETE -H "Authorization: token $TOKEN" \
    "https://api.github.com/repos/$REPO/actions/runs/$run_id"

    # Check the response status
    if [ $? -eq 0 ]; then
        echo "Deleted workflow run ID: $run_id successfully."
    else
        echo "Failed to delete workflow run ID: $run_id."
    fi
done

echo "Completed deletion process."