<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <v-text-field class="caption" placeholder="지번, 건물명, 도로명 입력"></v-text-field>
                </v-list-item-content>
            </v-list-item>

            <div class="being">
                <v-btn max-width="80%" min-width="80%" color="#2D9527" dark="dark">검색하기</v-btn>
            </div>

        </v-flex>
    </v-layout>

</template>
<script>
    export default {name: 'chwideug'}
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