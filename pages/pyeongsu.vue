<template>
    <v-layout column="column" row="row">
        <v-tabs background-color="white" color="#2D9527" center-active="center-active">
            <v-tab to="/yangdo">양도소득세</v-tab>
            <v-tab to="/chwideug">취득세</v-tab>
            <v-tab to="/tuja">투자수익률</v-tab>
            <v-tab to="/jeungyeo">증여세</v-tab>
            <v-tab to="/joonggae">중개보수료</v-tab>
            <v-tab to="/doro">도로명주소</v-tab>
            <v-tab class="font-weight-black" to="/pyeongsu">평수환산</v-tab>
            <v-tab to="/iza">이자계산</v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <v-col cols="6">
                        <v-text-field v-model="pyung" class="caption" placeholder="평수입력" suffix="평"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-subheader class="caption">{{pyung*3.3}}
                            제곱미터</v-subheader>
                    </v-col>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-col cols="6">
                        <v-text-field
                            v-model="meter"
                            class="caption"
                            placeholder="제곱미터입력"
                            suffix="제곱미터"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-subheader class="caption" color="green darken-4">{{Math.floor(meter/3.3)}}
                            평</v-subheader>
                    </v-col>
                </v-list-item-content>
            </v-list-item>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        name: 'pyeongsu',
        data() {
            return {pyung: '', meter: ''}
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