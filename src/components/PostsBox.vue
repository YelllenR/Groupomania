<template>
    <div id="post-container">
        <div class="onePost">
            <!-- v-for="post in posts" -->
            <div class="usersPic">
                <img src="../assets/mulet.jpg" alt="Profil picture" class="profil-picture">
                <!-- User picture -->
                <span class="username">{{username}}blakvjdk</span>
            </div>

            <div class="userPost">
                <div class="box-date-post">
                    <div class="dateTime">{{dateTime}}22/10/22 - 17h</div>
                    <div class="post">{{post}}
                        olalalala ceci est un post-container
                        d'enfervdkljvdkjqv blablakavndjndvq
                    </div>
                </div>

                <div class="reaction-icons-post">
                    <i class="fas fa-frown reaction"></i>
                    <i class="fas fa-laugh-beam reaction"></i>
                    <i class="fas fa-comment reaction"></i>
                </div>
                <span v-if="accountOwner">{{modification}}</span>
            </div>
        </div>

    </div>

</template>

<script setup>



</script>