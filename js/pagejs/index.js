var tableData = [
    {
        projectname:'urds',
        id:'123',
        title:'监控',
        status:'已完成',
        url:'http://10.186.18.126:5715/db_service'
    },
    {
        projectname:'urds',
        id:'123',
        title:'监控',
        status:'已完成',
        url:'http://10.186.18.126:5715/db_service'
    },
    {
        projectname:'urds',
        id:'123',
        title:'监控',
        status:'已完成',
        url:'http://10.186.18.126:5715/db_service'
    },
    {
        projectname:'urds',
        id:'123',
        title:'监控',
        status:'已完成',
        url:'http://10.186.18.126:5715/db_service'
    }
],$tbody = $('tbody'),$bodyStr='';
$bodyStr= '';
_.each(tableData,function(item,index){
    $bodyStr += '<tr><td>{0}</td><td>{1}</td><td>{2}</td><td>{3}</td><td>{4}</td></tr>'.format(item.projectname,item.id,item.title,item.status,item.url)
})
$tbody.append($bodyStr)
console.log($tbody)