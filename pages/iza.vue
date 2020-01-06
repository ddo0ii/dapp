<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">대상물 구분</p>
                    <v-btn-toggle
                        v-model="kind"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn class="caption" value="wonli" height="40px" style="width: 30%">원리금균등</v-btn>
                        <v-btn class="caption" value="won" height="40px" style="width: 30%">원금균등</v-btn>
                        <v-btn class="caption" value="man" height="40px" style="width: 30%">만기일시</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-content>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">대출기간</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field
                                class="caption"
                                v-model="duration"
                                placeholder="대출기간 입력"
                                suffix="개월"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">대출금액</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field class="caption" v-model="price" placeholder="대출금액 입력" suffix="만원"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">연이자율</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field class="caption" v-model="rate" placeholder="연이자율 입력" suffix="%"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">거치기간</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field
                                class="caption"
                                v-model="duration_g"
                                placeholder="거치기간 입력"
                                suffix="개월"></v-text-field>
                        </v-col>
                    </v-row>
                    <div class="being">
                        <v-btn max-width="80%" min-width="80%" color="#2D9527" dark="dark">계산하기</v-btn>
                    </div>

                </v-list-item-content>
            </v-list-item>

        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        name: 'jeungyeo',
        data() {
            return {
                kind: 'wonli',
                duration: null,
                duration_g: null,
                rate: null,
                price: null
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