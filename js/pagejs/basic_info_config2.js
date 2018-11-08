$(function () {
  var $content = $('#content div'),
      $tabTitle = $('#tabs li'),
      $wrapper = $('.wrapper'),
      $cancelBtn = $('.give_up'),
      $saveBtn = $('.save'),
      $tbody = $('tbody'),
      $table = $('table'),
      $addModal1 = $('.first'),
      $addModal2 = $('.second'),
      $addModal3 = $('.third'),
      $addBtn = $('.add'),
      $deleteBtn = $('.delete'),
      $detailModal = $('.dialog.suc'),
      $errMsgModal = $('.dialoa.err'),
      isShowAddModal = false
  // tab切换效果

  function modalAction($modal, isShowAddModal) {
      if (isShowAddModal == true) {
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
  // 添加功能
  $addBtn.on('click', function (e) {
      modalAction($addModal1, true);
  })
  $cancelBtn.on('click', function (e) {
      e.preventDefault()
      modalAction($addModal1, false);

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
      $wrapper.eq(0).addClass('hide').removeClass('show')
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
  $deleteBtn1.on('click', function (e) {
      var $str = '',$content = $detailModal.find('.content');
      if ($('.select').length != 0) {
          $('.wrapper').eq(2).addClass('show').removeClass('hide')
          $('.select').find('td').each(function(item,index){
              console.log(index)
          $str+= `<dl><dt>${$(index).attr('data-source')}</dt><dd>${index.innerText}</dd></dl>`

          })
          $content.append($str)
      } else {
          $('.wrapper').eq(1).addClass('show').removeClass('hide')
      }
  })
})