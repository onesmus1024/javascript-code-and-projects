
async function getTask(){

    const tasks = await fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
    console.log(tasks.status)
    const data = await tasks.json();
    const {dataseries} =data;
    document.getElementById('taskview').textContent=data.dataseries[0].timepoint;
    console.log(data);

}
getTask();