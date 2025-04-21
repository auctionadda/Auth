let stepCounter = 1;
let activityCounter = 1;
const vibrantColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#F7DC6F', '#E74C3C'];

document.getElementById('addStep').addEventListener('click', addStep);
document.getElementById('createJson').addEventListener('click', createJson);

function addStep() {
    const stepsContainer = document.getElementById('stepsContainer');
    const stepElement = document.createElement('div');
    stepElement.className = 'step card mb-3';
    stepElement.style.backgroundColor = vibrantColors[(stepCounter - 1) % vibrantColors.length];
    stepElement.innerHTML = `
        <div class="card-header" data-bs-toggle="collapse" data-bs-target="#step${stepCounter}">
            Step ${stepCounter}
        </div>
        <div id="step${stepCounter}" class="collapse show">
            <div class="card-body">
                <button class="btn btn-secondary mb-3" onclick="addActivity(this)">Add Activity</button>
                <div class="activities"></div>
            </div>
        </div>
    `;
    stepsContainer.appendChild(stepElement);
    stepCounter++;
}

function addActivity(button) {
    const activitiesContainer = button.nextElementSibling;
    const activityElement = document.createElement('div');
    activityElement.className = 'activity card mb-2';
    activityElement.innerHTML = `
        <div class="card-header" data-bs-toggle="collapse" data-bs-target="#activity${activityCounter}">
            Activity ${activityCounter}
        </div>
        <div id="activity${activityCounter}" class="collapse show">
            <div class="card-body">
                <div class="field-group">
                    <div class="field">
                        <label for="object${activityCounter}" class="form-label">Object</label>
                        <div class="input-group">
                            <input type="text" id="object${activityCounter}" class="form-control">
                            <button class="btn btn-outline-secondary" type="button" onclick="pasteClipboardText('object${activityCounter}')">Paste</button>
                        </div>
                    </div>
                    <div class="field">
                        <label for="mechanics${activityCounter}" class="form-label">Mechanics</label>
                        <div class="input-group">
                            <input type="text" id="mechanics${activityCounter}" class="form-control">
                            <button class="btn btn-outline-secondary" type="button" onclick="pasteClipboardText('mechanics${activityCounter}')">Paste</button>
                        </div>
                    </div>
                    <div class="field">
                        <label for="toolToUse${activityCounter}" class="form-label">Tool to Use</label>
                        <div class="input-group">
                            <input type="text" id="toolToUse${activityCounter}" class="form-control">
                            <button class="btn btn-outline-secondary" type="button" onclick="pasteClipboardText('toolToUse${activityCounter}')">Paste</button>
                        </div>
                    </div>
                    <div class="field">
                        <label for="toolReturnTransform${activityCounter}" class="form-label">Tool Return Transform</label>
                        <div class="input-group">
                            <input type="text" id="toolReturnTransform${activityCounter}" class="form-control">
                            <button class="btn btn-outline-secondary" type="button" onclick="pasteClipboardText('toolReturnTransform${activityCounter}')">Paste</button>
                        </div>
                    </div>
                    <div class="field">
                        <label class="form-label">Does Tool Return</label>
                        <div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="doesToolReturn${activityCounter}" id="doesToolReturnYes${activityCounter}" value="yes">
                                <label class="form-check-label" for="doesToolReturnYes${activityCounter}">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="doesToolReturn${activityCounter}" id="doesToolReturnNo${activityCounter}" value="no">
                                <label class="form-check-label" for="doesToolReturnNo${activityCounter}">No</label>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label class="form-label">Tool Grab On/Off</label>
                        <div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="toolGrabOnOff${activityCounter}" id="toolGrabOnOffYes${activityCounter}" value="yes">
                                <label class="form-check-label" for="toolGrabOnOffYes${activityCounter}">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="toolGrabOnOff${activityCounter}" id="toolGrabOnOffNo${activityCounter}" value="no">
                                <label class="form-check-label" for="toolGrabOnOffNo${activityCounter}">No</label>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label class="form-label">Tool Rotate</label>
                        <div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="toolRotate${activityCounter}" id="toolRotateYes${activityCounter}" value="yes">
                                <label class="form-check-label" for="toolRotateYes${activityCounter}">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="toolRotate${activityCounter}" id="toolRotateNo${activityCounter}" value="no">
                                <label class="form-check-label" for="toolRotateNo${activityCounter}">No</label>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label for="minAngle${activityCounter}" class="form-label">Min Angle</label>
                        <div class="input-group">
                            <input type="number" id="minAngle${activityCounter}" class="form-control" step="0.1">
                            <button class="btn btn-outline-secondary" type="button" onclick="pasteClipboardText('minAngle${activityCounter}')">Paste</button>
                        </div>
                    </div>
                    <div class="field">
                        <label for="maxAngle${activityCounter}" class="form-label">Max Angle</label>
                        <div class="input-group">
                            <input type="number" id="maxAngle${activityCounter}" class="form-control" step="0.1">
                            <button class="btn btn-outline-secondary" type="button" onclick="pasteClipboardText('maxAngle${activityCounter}')">Paste</button>
                        </div>
                    </div>
                    <div class="field">
                        <label class="form-label">Rotation Axis</label>
                        <div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="rotationAxis${activityCounter}" id="rotationAxisX${activityCounter}" value="X">
                                <label class="form-check-label" for="rotationAxisX${activityCounter}">X</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="rotationAxis${activityCounter}" id="rotationAxisY${activityCounter}" value="Y">
                                <label class="form-check-label" for="rotationAxisY${activityCounter}">Y</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="rotationAxis${activityCounter}" id="rotationAxisZ${activityCounter}" value="Z">
                                <label class="form-check-label" for="rotationAxisZ${activityCounter}">Z</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    function pasteClipboardText(inputId) {
        navigator.clipboard.readText().then(text => {
            document.getElementById(inputId).value = text;
        }).catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
    }
    activitiesContainer.appendChild(activityElement);
    activityCounter++;
}

function createJson() {
    const jsonName = document.getElementById('jsonName').value || 'default';
    const stepsContainer = document.getElementById('stepsContainer');
    const steps = stepsContainer.querySelectorAll('.step');
    const jsonData = {
        name: jsonName,
        steps: []
    };

    steps.forEach((step, stepIndex) => {
        const activities = step.querySelectorAll('.activity');
        const stepData = {
            stepNumber: stepIndex + 1,
            activities: []
        };

        activities.forEach((activity, activityIndex) => {
            const activityData = {
                activityNumber: activityIndex + 1,
                object: activity.querySelector('[id^="object"]').value,
                mechanics: activity.querySelector('[id^="mechanics"]').value,
                toolToUse: activity.querySelector('[id^="toolToUse"]').value,
                toolReturnTransform: activity.querySelector('[id^="toolReturnTransform"]').value,
                doesToolReturn: activity.querySelector('[name^="doesToolReturn"]:checked')?.value,
                toolGrabOnOff: activity.querySelector('[name^="toolGrabOnOff"]:checked')?.value,
                toolRotate: activity.querySelector('[name^="toolRotate"]:checked')?.value,
                minAngle: activity.querySelector('[id^="minAngle"]').value,
                maxAngle: activity.querySelector('[id^="maxAngle"]').value,
                rotationAxis: activity.querySelector('[name^="rotationAxis"]:checked')?.value
            };
            stepData.activities.push(activityData);
        });

        jsonData.steps.push(stepData);
    });

    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${jsonName}.json`;
    a.click();
    URL.revokeObjectURL(url);
}