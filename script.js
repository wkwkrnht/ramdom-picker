window.onload = function () {
    var limit = 36;
    var SpecialNumbers = [];
    var source = [];

    var app = new Vue(
        {
            el: '#pick',
            data: {
                SpecialNumber: 0,
                limit: 36,
                result: "Let's pick!"
            },
            methods: {
                loadLimit: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        limit = localStorage.getItem('limit');
                    }
                },
                setLimit: function () {
                    limit = this.limit
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('limit', limit);
                    }
                },
                specialNumber: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        SpecialNumbers = localStorage.getItem('SpecialNumber');
                    }
                    var target
                    var SpecialNumber = this.SpecialNumber
                    var id = this.id
                    if ( target === '' ) {
                        if ( id === 2 ) {
                            SpecialNumbers.shift()
                        } else {
                            SpecialNumbers.pop()
                        }
                    } else {
                        if ( target === 2 ) {
                            SpecialNumbers.unshift(SpecialNumber)
                        } else {
                            SpecialNumbers.push(SpecialNumber)
                        }
                    }
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('SpecialNumber', SpecialNumbers);
                    }
                },
                picking: function (){
                    var number, target, length
                    for ( i = 0; i < this.limit; i++ ) {
                        source.push(i)
                    }
                    number = Math.floor(Math.random() * source.length)
                    result = source[number] + 1
                    this.result = result
                    console.log(this.result)
                    if ( SpecialNumbers.indexOf(result) === -1 ) {
                        target = result - 1
                        length = this.limit + 1
                        source.splice(length, target)
                    }
                }
            }
        }
    );
};