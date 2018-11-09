$(function () {
    var $content = $('#content div'),
        $tabTitle = $('#tabs li'),
        $cancelBtn = $('input[type=reset]'),
        $saveBtn = $('input[type=submit]'),
        $addBtn1 = $('#tab1').find('.add'),
        $addBtn2 = $('#tab2').find('.add'),
        $addBtn3 = $('#tab3').find('.add'),
        $deleteBtn1 = $('#tab1').find('.delete'),
        $deleteBtn2 = $('#tab2').find('.delete'),
        $deleteBtn3 = $('#tab3').find('.delete'),
        $tbody = $('tbody'),
        $table = $('table'),
        $addModal1 = $('.first'),
        $addModal2 = $('.second'),
        $addModal3 = $('.third'),
        $sucModal = $('.wrapper.suc'),
        isShowAddModal = false;
    // tab切换效果

    function modalAction($modal, isShowAddModal) {
        if (isShowAddModal) {
            $modal.addClass('show').removeClass('hide')
        } else {
            $modal.addClass('hide').removeClass('show')
        }
        console.log(isShowAddModal)
    }

    $tabTitle.click(function (e) {
        e.preventDefault()
        $tabTitle.removeClass('current').removeClass('hoverItem')
        $(this).parent().addClass('current')
        $content.removeClass('show')
        $('#' + $(this).data('source')).addClass('show')
    })

    $tabTitle.hover(function () {
        if (!$(this).hasClass('current')) {
            $(this).addClass('hoverItem')
        }
    }, function () {
        $(this).removeClass('hoverItem')
    })
    // 表格hover效果
    $tbody.find('tr').hover(function () {
        $(this).addClass('tr_hover').siblings().removeClass('tr_hover')
    })
    $table.on('mouseout', function () {
        if ($(this).find('tr').hasClass('tr_hover')) {
            $(this).find('tr').removeClass('tr_hover')
        }
    }).on('click', 'tr', function () {
        $(this).addClass('select').siblings().removeClass('select')
    })
    // 添加功能
    function addProject($addBtn, $modal) {
        $addBtn.on('click', function (e) {
            modalAction($modal, true);
        })

        $cancelBtn.on('click', function (e) {
            modalAction($modal, false);
        })
        $saveBtn.on('click', function (e) {
            modalAction($modal, false)
        })
    }
    addProject($addBtn1, $addModal1)
    addProject($addBtn2, $addModal2)
    addProject($addBtn3, $addModal3)

    // 删除功能
    deleteProject($deleteBtn1);
    deleteProject($deleteBtn2);
    deleteProject($deleteBtn3);

    function deleteProject($deleteBtn) {
        $deleteBtn.on('click', function (e) {
            var $str = '',
                project_id,
                $msgContent = $sucModal.find('.content');
            if ($('.select').length != 0) {
                $sucModal.addClass('show').removeClass('hide')
                project_id = $('.select').attr('data-id')
                $('.select').find('td').each(function (item, index) {
                    $str += `<dl><dt>${$(index).attr('data-source')}</dt><dd>${index.innerText}</dd></dl>`
                })
                $msgContent.append($str)
                $cancelBtn.on('click', function (e) {
                    modalAction($sucModal, false);
                    window.location.reload() // 处理弹框关闭之后再次做删除操作弹框内信息显示错误的问题
                })
                $saveBtn.on('click', function (e) {
                    e.preventDefault()
                    $.ajax({
                        url: '/api/project/delete',
                        data: {
                            project_id: project_id
                        },
                        type: 'POST'
                    })
                    modalAction($sucModal, false);
                    window.location.reload()
                })
            } else {
                alert('未选中任何项目！')
            }
        })
    }
})