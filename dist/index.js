'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyClass = function () {
    function MyClass() {
        _classCallCheck(this, MyClass);

        this.prop1 = 'Property 1';
        this.prop2 = 'Property 2';
        this.array = [1, 2, 3, 4, 5];
    }

    _createClass(MyClass, [{
        key: 'printArray',
        value: function printArray() {
            console.log('Called sample method');
            this.array.map(function (item) {
                console.log(item);
            });
        }
    }]);

    return MyClass;
}();

module.exports = MyClass;