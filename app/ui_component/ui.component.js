System.register(['angular2/core', '../chart_component/chart.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, chart_component_1;
    var ChartUI;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chart_component_1_1) {
                chart_component_1 = chart_component_1_1;
            }],
        execute: function() {
            ChartUI = (function () {
                function ChartUI() {
                }
                ChartUI.prototype.changeSymbol = function () {
                    this.chartComponent.chart.newChart(this.symbolInput, this.chartComponent.sampleData);
                    this.symbolInput = '';
                };
                __decorate([
                    core_1.ViewChild(chart_component_1.ChartComponent), 
                    __metadata('design:type', chart_component_1.ChartComponent)
                ], ChartUI.prototype, "chartComponent", void 0);
                ChartUI = __decorate([
                    core_1.Component({
                        selector: 'chart-ui',
                        templateUrl: 'app/ui_component/ui.component.html',
                        directives: [chart_component_1.ChartComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartUI);
                return ChartUI;
            }());
            exports_1("ChartUI", ChartUI);
        }
    }
});
//# sourceMappingURL=ui.component.js.map