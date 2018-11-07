var tableDataObj = [
    {
        firstClom:'客户满意率',
        secondClom:'该版本周期',
        thirdClom:'',
    },
    {
        firstClom:'客户满意率',
        secondClom:'该版本周期',
        thirdClom:'95%',
    },
    {
        firstClom:'客户满意率',
        secondClom:'该版本周期',
        thirdClom:'95%',
    },
    {
        firstClom:'客户满意率',
        secondClom:'该版本周期',
        thirdClom:'95%',
    },
    {
        firstClom:'客户满意率',
        secondClom:'该版本周期',
        thirdClom:'95%',
    },

    {
        firstClom:'客户满意率',
        secondClom:'该版本周期',
        thirdClom:'95%',
    },
    {
        firstClom:'客户满意率',
        secondClom:'该版本周期',
        thirdClom:'95%',
    },
    {
        firstClom:'客户满意率',
        secondClom:'该版本周期',
        thirdClom:'95%',
    }
],$tbody = $('tbody'),$bodyStr='';
$bodyStr= '';
_.each(tableDataObj,function(item,index){
    $bodyStr += '<tr><td>{0}</td><td>{1}</td><td>{2}</td></tr>'.format(item.firstClom,item.secondClom,item.thirdClom)
})
$tbody.append($bodyStr)
console.log($tbody)