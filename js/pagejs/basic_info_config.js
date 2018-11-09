$(function () {
    var $content = $('#content div'),
        $tabTitle = $('#tabs li'),
        $cancelBtn = $('input[type=reset]'),
        $saveBtn = $('input[type=submit]'),
        $tab1 = $('#tab1'),
        $tab2 = $('#tab2'),
        $tab3 = $('#tab3'),
        $addBtn1 = $tab1.find('.add'),
        $addBtn2 = $tab2.find('.add'),
        $addBtn3 = $tab3.find('.add'),
        $tbody = $('tbody'),
        $table = $('table'),
        $addModal1 = $('.first'),
        $addModal2 = $('.second'),
        $addModal3 = $('.third'),
        $sucModal = $('.wrapper.suc');
    // tab切换效果

    function modalAction($modal, isShowAddModal) {
        if (isShowAddModal) {
            $modal.addClass('show').removeClass('hide')
        } else {
            $modal.addClass('hide').removeClass('show')
        }
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
    deleteProject($tab1);
    deleteProject($tab2);
    deleteProject($tab3);

    function deleteProject($tab) {
        var $deleteBtn = $tab.find('.delete');
        $deleteBtn.on('click', function (e) {
            var $str = '',
                project_id,
                $msgContent = $sucModal.find('.content');
            if ($tab.find('.select').length != 0) {
                $sucModal.addClass('show').removeClass('hide')
                project_id = $tab.find('.select').attr('data-id')
                $tab.find('input[type=hidden]').val(project_id)
                $tab.find('.select').find('td').each(function (item, index) {
                    $str += `<dl><dt>${$(index).attr('data-source')}</dt><dd>${index.innerText}</dd></dl>`
                })
                $msgContent.html($str);

            } else {
                alert('未选中任何项目！')
            }
        })
        $cancelBtn.on('click', function () {
            modalAction($sucModal, false);
        })
        $saveBtn.on('click', function (e) {
            modalAction($sucModal, false);
        })
    }
})