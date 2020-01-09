<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <v-col cols="6">
                        <v-text-field v-model="pyung" class="caption" placeholder="평수입력" suffix="평">
                        </v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-subheader class="caption">{{pyung*3.3}} 제곱미터</v-subheader>
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
                        <v-subheader class="caption" color="green darken-4">{{Math.floor(meter/3.3)}} 평</v-subheader>
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
        },
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