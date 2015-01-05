(function(global){
    var KendoUIModalView,
        app = global.app = global.app || {};
    
    KendoUIModalView = kendo.data.ObservableObject.extend({
        
        WidgetFlatDataSource:null,
        WidgetGroupDataSource:null,
        
        init:function()
        {
            var that = this;
           kendo.data.ObservableObject.fn.init.apply(that,[]);
            
            var flatDS = new kendo.data.DataSource({
                transport:{
                    read:{
                        url:"script/app/widget.json",
                        dataType:"json"
                    }
                }
            });
            
            var groupDS = new kendo.data.DataSource({
                transport:{
                    read:{
                        url:"script/app/widgetG.json",
                        dataType:"json"
                    }
                },
                group:{
                    field:"letter"
                }
            });
           
            that.set("WidgetFlatDataSource",flatDS);
            that.set("WidgetGroupDataSource",groupDS);
        },
        
        hello:function(e)
        {
            alert(e.data.name);
        }
    });
    app.kendoUI = {
        viewModel : new KendoUIModalView()
    };
}(window));