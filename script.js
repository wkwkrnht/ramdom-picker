window.onload = function () {
    var limit = 36;
    var source = [];

    var app = new Vue(
        {
            el: '#pick',
            data: {
                SpecialNumber: 0,
                limit: 36,
                SpecialNumbers: [],
                result: "Let's pick!"
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
                setSpecialNumber: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('SpecialNumbers', this.SpecialNumbers);
                    }
                },
                picking: function (){
                    var limit, number, target, length
                    limit = this.limit
                    for ( i = 0; i < limit; i++ ) {
                        source.push(i)
                    }
                    number = Math.floor(Math.random() * source.length)
                    this.result = source[number] + 1
                    if ( this.SpecialNumbers.indexOf(result) === -1 ) {
                        target = result - 1
                        length = limit + 1
                        source.splice(length, target)
                    }
                }
            }
        }
    );
};