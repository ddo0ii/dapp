<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <v-col cols="6">
                        <v-text-field class="caption" placeholder="평수입력" suffix="평"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field class="caption" placeholder="제곱미터입력" suffix="m^2"></v-text-field>
                    </v-col>
                </v-list-item-content>
            </v-list-item>

            <div class="being">
                <v-btn max-width="80%" min-width="80%" color="#2D9527" dark="dark">계산하기</v-btn>
            </div>

        </v-flex>
    </v-layout>

</template>
<script>
    export default {
        name: 'yangdo',
        date: new Date()
            .toISOString()
            .substr(0, 10),
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