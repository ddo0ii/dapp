<!-- http 가이드 -- http://postcode.map.daum.net/guide https 가이드 --
https://spi.maps.daum.net/postcode/guidessl -->
<template>
    <v-layout column="column" row="row">
        <v-tabs background-color="white" color="#2D9527" center-active="center-active">
            <v-tab to="/yangdo">양도소득세</v-tab>
            <v-tab to="/chwideug">취득세</v-tab>
            <v-tab to="/tuja">투자수익률</v-tab>
            <v-tab to="/jeungyeo">증여세</v-tab>
            <v-tab to="/joonggae">중개보수료</v-tab>
            <v-tab class="font-weight-black" to="/doro">도로명주소</v-tab>
            <v-tab to="/pyeongsu">평수환산</v-tab>
            <v-tab to="/iza">이자계산</v-tab>
        </v-tabs>
        <v-divider></v-divider>
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