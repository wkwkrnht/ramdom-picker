window.onload = function () {
    var limit = 36;
    var source = [];

    var app = new Vue(
        {
            el: '#pick',
            data: {
                limit: 36,
                SpecialNumbers: '',
                result: '00'
            },
            created: function () {
                if(('localStorage' in window) && (window.localStorage !== null)) {
                    this.limit = localStorage.getItem('limit');
                    this.SpecialNumbers = localStorage.getItem('SpecialNumbers');
                }
            },
            methods: {
                setLimit: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('limit', this.limit);
                    }
                },
                setSpecialNumbers: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('SpecialNumbers', this.SpecialNumbers);
                    }
                },
                picking: function (){
                    var limit, number, target
                    limit = this.limit
                    number = this.SpecialNumbers.split(',')
                    target = Math.floor(Math.random() * limit)
                    if ( source.indexOf(target) < 0) {
                        this.result = target + 1
                    }
                    if ( number.indexOf(this.result) < 0 ) {
                        source.push(target)
                    }
                    console.log(this.result)
                }
            }
        }
    );
};