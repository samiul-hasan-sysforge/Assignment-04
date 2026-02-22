let totalInterview = []
let totalRejected = []
let currentStatus = ''

const total = document.getElementById("total")
const currentInterview = document.getElementById("interview")
const currentRejected = document.getElementById("rejected")

const cardSection = document.querySelector('#card-section')

const allBtn = document.getElementById("all-btn")
const interviewBtn = document.getElementById("interview-btn")
const rejectedBtn = document.getElementById("rejected-btn")

const noJobs = document.getElementById('no-jobs')
// const noReject = document.getElementById('no-reject')

const filteredSection = document.getElementById("filtered-section")


const allCards = document.getElementById("all-cards")

function calculateTracker() {
    total.innerText = allCards.children.length
    currentInterview.innerText = totalInterview.length
    currentRejected.innerText = totalRejected.length
}
calculateTracker()




function btnToggle(id) {
    allBtn.classList.add('btn-soft')
    interviewBtn.classList.add('btn-soft')
    rejectedBtn.classList.add('btn-soft')

    const selected = document.getElementById(id)
    selected.classList.remove('btn-soft')

    currentStatus = id

    if (id === 'interview-btn') {
        allCards.classList.add('hidden')
        filteredSection.classList.add('hidden')
        noJobs.classList.remove('hidden')
        if (totalInterview.length > 0) {
            noJobs.classList.add('hidden')
            // allCards.classList.add('hidden')
            filteredSection.classList.remove('hidden')
            renderedInterview()
        }
    }
    else if (id === 'rejected-btn') {
        allCards.classList.add('hidden')
        noJobs.classList.remove('hidden')
        filteredSection.classList.add('hidden')
        if (totalRejected.length > 0) {
            // allCards.classList.add('hidden')
            noJobs.classList.add('hidden')
            filteredSection.classList.remove('hidden')
            renderedRejected()
        }
    }
    else if (id === 'all-btn') {
        allCards.classList.remove('hidden')
        noJobs.classList.add('hidden')
        filteredSection.classList.add('hidden')
    }
}




cardSection.addEventListener('click', function (event) {
    if (event.target.classList.contains('card-interview-btn')) {
        const jobActionsParrent = event.target.parentNode.parentNode

        jobActionsParrent.querySelector('.job-status').innerText = 'INTERVIEW'

        const title = jobActionsParrent.querySelector('.title').innerText
        const skill = jobActionsParrent.querySelector('.skill').innerText
        const jobLocation = jobActionsParrent.querySelector('.job-location').innerText
        const jobType = jobActionsParrent.querySelector('.job-type').innerText
        const jobSalary = jobActionsParrent.querySelector('.job-salary').innerText
        const jobStatus = jobActionsParrent.querySelector('.job-status').innerText
        const discription = jobActionsParrent.querySelector('.discription').innerText

        const jobInfo = {
            title,
            skill,
            jobLocation,
            jobType,
            jobSalary,
            jobStatus,
            discription
        }
        // console.log(jobInfo)

        totalRejected = totalRejected.filter(i => i.title !== jobInfo.title)
        const jobInfoExist = totalInterview.find(i => i.title == jobInfo.title)

        if (!jobInfoExist) {
            totalInterview.push(jobInfo)
        }


        calculateTracker()
        renderedInterview()
        // console.log(totalInterview)

        if (currentStatus == 'rejected-btn') {
            renderedRejected()
            if (totalRejected.length < 1) {
                noJobs.classList.remove('hidden')
            }
        }
    }
    else if (event.target.classList.contains('card-reject-btn')) {
        const jobActionsParrent = event.target.parentNode.parentNode

        jobActionsParrent.querySelector('.job-status').innerText = 'REJECTED'

        const title = jobActionsParrent.querySelector('.title').innerText
        const skill = jobActionsParrent.querySelector('.skill').innerText
        const jobLocation = jobActionsParrent.querySelector('.job-location').innerText
        const jobType = jobActionsParrent.querySelector('.job-type').innerText
        const jobSalary = jobActionsParrent.querySelector('.job-salary').innerText
        const jobStatus = jobActionsParrent.querySelector('.job-status').innerText
        const discription = jobActionsParrent.querySelector('.discription').innerText

        const jobInfo = {
            title,
            skill,
            jobLocation,
            jobType,
            jobSalary,
            jobStatus,
            discription
        }
        // console.log(jobInfo)
        totalInterview = totalInterview.filter(i => i.title !== jobInfo.title)
        const jobInfoExist = totalRejected.find(i => i.title == jobInfo.title)

        if (!jobInfoExist) {
            totalRejected.push(jobInfo)
        }
        calculateTracker()
        renderedRejected()

        if (currentStatus == 'interview-btn') {
            renderedInterview()
            if (totalInterview.length < 1) {
                noJobs.classList.remove('hidden')
            }
        }
    }
})


function renderedInterview() {
    filteredSection.innerHTML = ''

    for (let interview of totalInterview) {
        // console.log(interview)
        let div = document.createElement('div')
        div.innerHTML = `
        <div class="bg-white p-8 rounded-md shadow-xl flex justify-between">
            <div class="space-y-5">
                <div>
                    <h4 class="text-2xl font-medium title">${interview.title}</h4>
                    <p class="text-gray-600 skill">${interview.skill}</p>
                </div>
                <ul class="flex gap-3 text-gray-600 job-info">
                    <li class="job-location">${interview.jobLocation}</li>
                    <li class="job-type list-disc list-inside">${interview.jobType}</li>
                    <li class="job-salary list-disc list-inside">${interview.jobSalary}</li>
                </ul>
                <p class="btn job-status">${interview.jobStatus}</p>
                <p class="discription">${interview.discription}</p>

                <div>
                    <button class="btn btn-outline btn-success card-interview-btn">INTERVIEW</button>
                    <button class="btn btn-outline btn-error card-reject-btn">REJECTED</button>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        `

        filteredSection.appendChild(div)
    }
}




function renderedRejected() {
    filteredSection.innerHTML = ''

    for (let rejected of totalRejected) {
        // console.log(interview)
        let div = document.createElement('div')
        div.innerHTML = `
        <div class="bg-white p-8 rounded-md shadow-xl flex justify-between">
            <div class="space-y-5">
                <div>
                    <h4 class="text-2xl font-medium title">${rejected.title}</h4>
                    <p class="text-gray-600 skill">${rejected.skill}</p>
                </div>
                <ul class="flex gap-3 text-gray-600 job-info">
                    <li class="job-location">${rejected.jobLocation}</li>
                    <li class="job-type list-disc list-inside">${rejected.jobType}</li>
                    <li class="job-salary list-disc list-inside">${rejected.jobSalary}</li>
                </ul>
                <p class="btn job-status">${rejected.jobStatus}</p>
                <p class="discription">${rejected.discription}</p>

                <div>
                    <button class="btn btn-outline btn-success card-interview-btn">INTERVIEW</button>
                    <button class="btn btn-outline btn-error card-reject-btn">REJECTED</button>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        `

        filteredSection.appendChild(div)
    }
}
