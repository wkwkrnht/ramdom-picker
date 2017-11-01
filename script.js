window.onload = function () {
    var limit = 36;
    var SpecialNumbers = [];
    var source = [];

    var vm = new Vue(
        {
            el: '#SpecialNumber',
            data: {
                SpecialNumber: ''
            },
            methods: {
                specialNumber: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        SpecialNumbers = localStorage.setItem('SpecialNumber');
                        SpecialNumbers = window.localStorage.setItem('SpecialNumber');
                        SpecialNumbers = localStorage.SpecialNumber
                    }
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
                        window.localStorage.setItem('SpecialNumber', SpecialNumbers);
                        localStorage.SpecialNumber = SpecialNumbers;
                    }
                }
            }
        }
    )
    var vm1 = new Vue(
        {
            el: '#setLimit',
            data: {
                limit: '36'
            },
            methods: {
                loadLimit: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        limit = localStorage.setItem('limit');
                        limit = window.localStorage.setItem('limit');
                        limit = localStorage.specialNumber
                    }
                },
                setLimit: function () {
                    limit = this.limit
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('specialNumber', limit);
                        window.localStorage.setItem('specialNumber', limit);
                        localStorage.specialNumber = limit;
                    }
                }
            }
        }
    )
    var vm2 = new Vue(
        {
            el: '#pick',
            methods: {
                picking: function (){
                    for ( i = 0, i < wm.limit, i++ ) {
                        source.push(i)
                    }
                    result = Math.floor(Math.random() * source.length)
                }
            }
        }
    )
    var vm3 = new Vue(
        {
            el: '#result',
            data: {
                result: vm2.result
            }
        }
    )
};