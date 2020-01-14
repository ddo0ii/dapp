<template>
    <v-layout column="column" row="row">
        <v-tabs background-color="white" color="#2D9527" center-active="center-active">
            <v-tab class="font-weight-black" to="/yangdo">양도소득세</v-tab>
            <v-tab to="/chwideug">취득세</v-tab>
            <v-tab to="/tuja">투자수익률</v-tab>
            <v-tab to="/jeungyeo">증여세</v-tab>
            <v-tab to="/joonggae">중개보수료</v-tab>
            <v-tab to="/doro">도로명주소</v-tab>
            <v-tab to="/pyeongsu">평수환산</v-tab>
            <v-tab to="/iza">이자계산</v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-flex wrap="wrap">
            <v-dialog v-model="dialog2" width="600px">
                <template v-slot:activator="{ on }">
                    <v-btn
                        absolute="absolute"
                        dark="dark"
                        fab="fab"
                        right="right"
                        small="small"
                        color="orange"
                        v-on="on">
                        <v-icon small="small">mdi-help</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">일시적 1가구 2주택 조건</span>
                    </v-card-title>
                    <v-card-text>기존 주택을 새 주택 구입일로부터 3년 이내 (일부 특정 경우에는 5년 이내)에 팔아야 일시적 1가구 2주택 조건을 만족합니다.
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            class="caption"
                            color="green darken-1"
                            text="text"
                            @click="dialog2 = false">OK</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">대상물의 등기 여부</p>
                    <v-btn-toggle
                        v-model="registration"
                        mjws="m"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn class="caption" value="yes" height="40px" style="width: 45%">등기</v-btn>
                        <v-btn class="caption" value="no" height="40px" style="width: 45%">미등기</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>
            <div v-if="registration==='yes'">
                <v-list-item>
                    <v-list-item-content>
                        <p class="font-weight-black">대상물 구분</p>
                        <v-btn-toggle
                            v-model="asset_type"
                            tile="tile"
                            color="blue"
                            group="group"
                            style="flex-wrap: wrap; width: 100%">
                            <v-btn class="caption" value="house" height="40px" style="width: 45%">주택</v-btn>
                            <v-btn class="caption" value="land" height="40px" style="width: 45%">비사업용토지</v-btn>
                            <v-btn
                                class="caption"
                                asset_type="etc"
                                value="b3"
                                height="40px"
                                style="width: 90%">기타 부동산(사업용 토지, 분양권 등)</v-btn>
                        </v-btn-toggle>
                    </v-list-item-content>
                </v-list-item>
                <div v-if="asset_type==='house'">
                    <v-list-item>
                        <v-list-item-content>
                            <p class="font-weight-black">일시적 1가구 2주택 조건</p>

                            <v-btn-toggle
                                v-model="house_count"
                                tile="tile"
                                color="blue"
                                group="group"
                                style="flex-wrap: wrap; width: 100%">
                                <v-btn class="caption" value="one" height="40px" style="width: 45%">1주택자(일시적2주택자)</v-btn>
                                <v-btn class="caption" value="two" height="40px" style="width: 45%">2주택자이상</v-btn>
                            </v-btn-toggle>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </div>
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">금액</p>
                    <v-col cols="6">
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y="offset-y"
                            min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    class="caption"
                                    v-model="date_buy"
                                    label="양도일선택"
                                    readonly="readonly"
                                    v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title="no-title" @input="menu=false"></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model="price_buy"
                            class="caption"
                            placeholder="양도가액"
                            suffix="만원"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-menu
                            ref="menu2"
                            v-model="menu2"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y="offset-y"
                            min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    class="caption date_transfer"
                                    v-model="date_transfer"
                                    label="취득일선택"
                                    readonly="readonly"
                                    v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date2" no-title="no-title" @input="menu2=false"></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model="price_transfer"
                            class="caption"
                            placeholder="취득가액"
                            suffix="만원"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-subheader class="caption" color="green darken-4">소요경비</v-subheader>
                    </v-col>
                    <v-col cols="7">
                        <v-text-field
                            v-model="price_etc"
                            class="caption"
                            placeholder="소요경비 입력"
                            suffix="만원"></v-text-field>
                    </v-col>
                    <v-dialog
                        v-model="dialog"
                        fullscreen="fullscreen"
                        hide-overlay="hide-overlay"
                        transition="dialog-bottom-transition">
                        <template v-slot:activator="{ on }">
                            <div class="being">
                                <v-btn
                                    @click="yangTest"
                                    max-width="80%"
                                    min-width="80%"
                                    color="#2D9527"
                                    dark="dark"
                                    v-on="on">계산하기</v-btn>
                            </div>
                        </template>
                        <v-card>
                            <v-toolbar dark="dark" color="#2D9527">
                                <v-btn icon="icon" dark="dark" @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <v-toolbar-title>계산 결과</v-toolbar-title>
                            </v-toolbar>
                            <v-container v-if="ycalc_result.ywhich === 'tax-transfer'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>양도가액</v-list-item-content>
                                        <v-list-item-content>{{ycalc_result.yresult.yangdoPrice}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>취득가액</v-list-item-content>
                                        <v-list-item-content>{{ycalc_result.yresult.chuiDeukPrice}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>필요경비</v-list-item-content>
                                        <v-list-item-content>{{ycalc_result.yresult.cost}}원</v-list-item-content>
                                    </v-list-item>

                                    <v-list-item>
                                        <v-list-item-content style="color: #0085FF">양도차익</v-list-item-content>
                                        <v-list-item-content style="color: #0085FF">{{ycalc_result.yresult.yangdoGains}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                            <v-divider></v-divider>
                            <v-container v-if="ycalc_result.ywhich === 'tax-transfer'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>장기보유특별공제</v-list-item-content>
                                        <v-list-item-content>{{ycalc_result.yresult.longTermDeduction}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content style="color: #0085FF">양도소득 금액</v-list-item-content>
                                        <v-list-item-content style="color: #0085FF">{{ycalc_result.yresult.yangdoIncomePrice}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>양도소득 기본공제<br/>(연간 250만원 한도)</v-list-item-content>
                                        <v-list-item-content>{{ycalc_result.yresult.yangdoBasicDeduction}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content style="color: #0085FF">과세표준</v-list-item-content>
                                        <v-list-item-content style="color: #0085FF">{{ycalc_result.yresult.taxStandard}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                            <v-divider></v-divider>
                            <v-container v-if="ycalc_result.ywhich === 'tax-transfer'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>세율</v-list-item-content>
                                        <v-list-item-content>{{ycalc_result.yresult.taxRatio}}%</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content style="color: #0085FF">세율 적용값</v-list-item-content>
                                        <v-list-item-content style="color: #0085FF">{{ycalc_result.yresult.taxRatioApplied}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>누진공제액</v-list-item-content>
                                        <v-list-item-content>{{ycalc_result.yresult.graduallyAdvancedDeduction}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content style="color: #0085FF">양도소득세</v-list-item-content>
                                        <v-list-item-content style="color: #0085FF">{{ycalc_result.yresult.yangdoIncomeTax}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                            <v-divider></v-divider>
                            <v-container v-if="ycalc_result.ywhich === 'tax-transfer'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>지방소득세(주민세)</v-list-item-content>
                                        <v-list-item-content>{{ycalc_result.yresult.jibangIncomeTax}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content style="color: #0085FF">총 비용</v-list-item-content>
                                        <v-list-item-content style="color: #0085FF">{{ycalc_result.yresult.totalPrice}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                        </v-card>
                    </v-dialog>
                </v-list-item-content>
            </v-list-item>
        </v-flex>
    </v-layout>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-cookies@1.6.1/vue-cookies.js"></script>
<script>
    import axios from "axios"
    import Vue from 'vue'
    import VueCookies from 'vue-cookies'
    Vue.use(VueCookies)
    export default {
        name: 'yangdo',
        data: vm => ({
            date: new Date()
                .toISOString()
                .substr(0, 10),
            date_buy: vm.formatDate(new Date().toISOString().substr(0, 10)),
            menu: false
        }),
        data: vm2 => ({
            date2: new Date()
                .toISOString()
                .substr(0, 10),
            date_transfer: vm2.formatDate2(new Date().toISOString().substr(0, 10)),
            menu2: false
        }),
        data() {
            return {
                text: 'text',
                registration: 'yes',
                asset_type: '',
                house_count: '',
                modal: false,
                menu: false,
                menu2: false,
                dialog: false,
                dialog2: false,
                hidden: false,
                date: '',
                date2: '',
                date_buy: '',
                price_buy: '',
                date_transfer: '',
                price_transfer: '',
                price_etc: '',
                ycalc_result: {
                    ywhich: '',
                    yresult: null
                },
                possessPeriod: '',
                yangdoGainsDeducted: '',

                yangdoPrice: '',
                chuiDeukPrice: '',
                cost: '',
                yangdoGains: '',
                longTermDeduction: '',
                yangdoIncomePrice: '',
                yangdoBasicDeduction: '',
                taxStandard: '',
                taxRatio: '',
                taxRatioApplied: '',
                graduallyAdvancedDeduction: '',
                yangdoIncomeTax: '',
                jibangIncomeTax: '',
                totalPrice: ''
            }
        },
        watch: {
            date(val) {
                this.date_buy = this.formatDate(this.date)
            },
            date2(val) {
                this.date_transfer = this.formatDate(this.date2)
            }
        },
        methods: {
            formatDate(date) {
                if (!date) 
                    return null
                const [year, month, day] = date.split('-')
                return `${year}${month}${day}`
            },
            formatDate2(date2) {
                if (!date2) 
                    return null
                const [year, month, day] = date2.split('-')
                return `${year}${month}${day}`
            },
            yangTest() {
                axios
                    .post("https://www.ddhouse.co.kr/api/v1/public/calculator/tax-transfer", {
                        registration: this.registration,
                        asset_type: this.asset_type,
                        house_count: this.house_count,
                        date_buy: this.date_buy,
                        price_buy: this.price_buy,
                        date_transfer: this.date_transfer,
                        price_transfer: this.price_transfer,
                        price_etc: this.price_etc
                    })
                    .then(res => {
                        var yusering = {
                            registration: this.registration,
                            asset_type: this.asset_type,
                            house_count: this.house_count,
                            date_buy: this.date_buy,
                            price_buy: this.price_buy,
                            date_transfer: this.date_transfer,
                            price_transfer: this.price_transfer,
                            price_etc: this.price_etc
                        }
                        this
                            .$cookies
                            .set('yusering', yusering);
                        // print user name
                        console.log(this.$cookies.get('yusering'))

                        console.log(res);
                        this.ycalc_result.ywhich = 'tax-transfer'
                        this.ycalc_result.yresult = res
                            .data
                            console
                            .log(this.ycalc_result)
                        this
                            .$cookies
                            .set('yrusering', res.data)
                        console.log(this.$cookies.get('yrusering'))
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }
</script>

<style scoped="scoped">
    .being {
        display: flex;
        justify-content: center;
    }
</style>