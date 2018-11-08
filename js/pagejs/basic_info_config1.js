$(function () {
  var $content = $('#content div'),
    $tabTitle = $('#tabs li'),
    $addBtn = $('.add'),
    $deleteBtn = $('.delete'),
    $wrapper = $('.wrapper'),
    $cancelBtn = $('.give_up'),
    $saveBtn = $('.save'),
    $tbody = $('tbody'),
    $table = $('table'),
    $addModal = $('.dialog.add'),
    $detailModal = $('.dialog.suc'),
    $errMsgModal = $('.dialoa.err'),
    isShowModal = false
  // tab切换效果
  console.log(isShowModal)

  function modalAction (isShowModal) {
    if (isShowModal == true) {
      $wrapper.addClass('show').removeClass('hide')
    }else {
      $wrapper.addClass('hide').removeClass('show')
    }
    console.log(isShowModal)
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
  // 添加功能
  $addBtn.on('click', function (e) {
    e.preventDefault()
    // isShowModal = true;
    modalAction(true)

    // $wrapper.addClass('show').removeClass('hide')
    $addModal.addClass('show').removeClass('hide')
  })
  $cancelBtn.on('click', function (e) {
    e.preventDefault()
    // $wrapper.removeClass('show').addClass('hide')
    // isShowModal = false;
    modalAction(false)
  })
  $saveBtn.on('click', function (e) {
    e.preventDefault()
    $.ajax({
      url: 'http://10.186.30.166:25715/api/user/login',
      type: 'POST',
      data: {
        user_group: 'root',
        user: window.btoa('root'),
        password: window.btoa('root')
      },
      success: function (suc) {
        console.log(suc)
      },
      error: function (err) {
        console.log(err)
      }
    })
    // $wrapper.addClass('hide').removeClass('show')
    // isShowModal = false
    modalAction(false)
  })
  // 删除功能
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
  $deleteBtn.on('click', function (e) {
    // $wrapper.addClass('show').removeClass('hide')
    // isShowModal =true
    modalAction(true)
    if ($('.select').length != 0) {
      $errMsgModal.addClass('show').removeClass('hide')
    }else {
      $detailModal.addClass('show').removeClass('hide')
    }
  })
})
