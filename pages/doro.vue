<!-- http 가이드 -- http://postcode.map.daum.net/guide https 가이드 --
https://spi.maps.daum.net/postcode/guidessl -->
<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <div id="app">
                <DaumPostcode :on-complete="handleAddress"/>
            </div>
        </v-flex>
    </v-layout>

</template>

<script>
    import DaumPostcode from 'vuejs-daum-postcode'

    var handleAddress = (data) => {
        let fullAddress = data.address
        let extraAddress = ''
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname
            }
            if (data.buildingName !== '') {
                extraAddress += (
                    extraAddress !== ''
                        ? `, ${data.buildingName}`
                        : data.buildingName
                )
            }
            fullAddress += (
                extraAddress !== ''
                    ? ` (${extraAddress})`
                    : ''
            )
        }

        console.log(fullAddress) // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    }
    export default {
        data() {
            name : 'doro'
            return {}
        },
        components: {
            DaumPostcode
        },
        methods: {
            handleAddress
        }
    }
</script>

<style scoped="scoped">
    .btn {
        border: rgb(220, 226, 233);
    }
    .being {
        display: flex;
        justify-content: center;
    }
</style>