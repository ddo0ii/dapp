<template>
    <v-layout column="column" row="row">
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <v-text-field class="caption" placeholder="지번, 건물명, 도로명 입력"></v-text-field>
                </v-list-item-content>
            </v-list-item>

            <div class="being">
                <v-btn
                    @click="test"
                    max-width="80%"
                    min-width="80%"
                    color="#2D9527"
                    dark="dark">검색하기</v-btn>
            </div>

            <div class="being">
                <v-btn
                    @click="postTest"
                    max-width="80%"
                    min-width="80%"
                    color="#2D9527"
                    dark="dark">검색하기</v-btn>
            </div>

        </v-flex>
    </v-layout>

</template>
<script>
    import axios from "axios"
    export default {
        data() {
            return {name: 'chwideug'}
        },
        methods: {
            test() {
                axios
                    .get("https://reqres.in/api/users?page=2")
                    .then(res => {
                        // handle success
                        console.log(res);
                    })
                    .catch(err => {
                        // handle error
                        console.log(err);
                    })
                    . finally(() => {
                        // always executed
                        console.log("test");
                    });
            },
            postTest() {
                axios
                    .post("https://reqres.in/api/register", {
                        "email": "eve.holt@reqres.in",
                        "password": "pistol"
                    })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
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