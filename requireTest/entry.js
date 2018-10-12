define(['static/js/views/table.js', 
'static/js/views/utils.js', 
'static/js/plan/list.js'
], function (Viewtable, 
    Utils, 
    Planlist
    ) {

    function reloadViewtable (columns, rows, res) {
        window.CACHE_ = {};

        var viewtable = new Viewtable(Planlist.configs, {}, columns, rows);
        viewtable.render(res, rows, false);
        $('#entry-list').html(viewtable.tablebox);
    }

    return {
        init: function () {
            $.el.get({
                url: '/sys/v1/view/26bdca4d82374f12a7ddb53af9f56802',
                data: {
                    id: '26bdca4d82374f12a7ddb53af9f56802',
                    state: 'yes'
                },
                success: function (res) {
                    var columns = res.res.ViewBaseField;
                    var tableColumns = [];

                    var checkCol = {
                        name: '_checkbox',
                        _checkbox: true,
                        _width: 'w_80 pl_15',
                        _format: function (row) {
                            // var td = '<input type="checkbox" class="mainId-check-item" />';
                            var pid = $.menu.getParam("id") || row.projectId || row.ownerId || '',  // $.menu.getParam("id") || r.projectId || r.ownerId || '',
                                td = '';
    
                            if ($.auth.map[pid || 'system'] && $.auth.map[pid || 'system'][auth].r) {
                                td = '<input type="checkbox" class="mainId-check-item" />';
                            } else {
                                td = '<input type="checkbox" class="mainId-check-item" disabled />'; // '&nbsp;';
                            }
    
                            return td;
                        }
                    };
                    tableColumns.push(checkCol);

                    _.each(columns, function (d, index) {
                        if (!!d) {
                            // 处理每一列对应的数据显示
                            d._format = Planlist.config().format[d.name] || Utils.format(d);
                            if (['name', 'percentComplete', 'state', 'updateBy'].indexOf(d.name) !== -1) {
                                tableColumns.push(d);
                            }
                        }
                    });

                    $.el.post({
                        url: '/plan/v1/26bdca4d82374f12a7ddb53af9f56802/businesslist',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: JSON.stringify({
                            pageindex: 1,
                            pagesize: 10,
                            projectid: 'b017be1d31f84f138c1d77c4ae72602a'
                        }),
                        success: function (msg) {
                            reloadViewtable(tableColumns, msg.res.data.records, msg.res);
                        }
                    });
                }    
            });

        }
    };
});