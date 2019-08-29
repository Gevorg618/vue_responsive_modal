<template>
    <div>
        <b-modal id="paymentRegister"
                 modal-class="shopex-modal"
                 centered
                 size="xl">
            <h1 class="logo">
                <span class="text-blue">Shop</span><span class="text-yellow">ex</span>
                <span class="text-blue text-12 d-block">Be happy.</span>
            </h1>
            <div class="header-section text-center">
                <h2 class="primary-header">צור משתמש חדש</h2>
                <h2 class="secondary-header">.אנחנו שמחים שאתה איתנו, העגלה שלך שמורה עד לסוף התהליך</h2>
            </div>
            <div class="body-section">
                <div class="row pt-4 p-lg-4">
                    <div class="col-12 col-lg-6 text-center border-right border-dark d-flex align-items-center justify-content-center padding-big b-none">
                        <div>
                            <button type="button" class="btn fb-btn d-block material-btn text-white"> הרשם עם גוגל
                                <img src="../../assets/images/icons/fg_logo.png" alt="facebook" width="21">
                            </button>
                            <button type="button" class="btn d-block material-btn mt-4 text-secondary">הרשם עם גוגל
                                <img src="../../assets/images/icons/search.png" alt="facebook" width="21">
                            </button>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 padding-big">
                        <form>
                            <div class="form-row justify-content-between">
                                <div class="form-group col-md-6 p-0 pr-md-3">
                                    <input type="text" class="form-control" placeholder="שם משפחה">
                                </div>
                                <div class="form-group col-md-6 p-0 pl-md-3">
                                    <input type="text" class="form-control" placeholder="שם פרטי">
                                </div>
                            </div>
                            <div class="form-row justify-content-end">
                                <div class="form-group w-75 wide-tablet">
                                    <input type="text" class="form-control" placeholder="כתובת אימייל">
                                </div>
                            </div>
                            <div class="form-row justify-content-end">
                                <div class="form-group w-75 wide-tablet">
                                    <input type="text" class="form-control" placeholder="ססמא">
                                </div>
                            </div>
                            <div class="form-row justify-content-end mb-4 mt-3">
                                <button type="submit" class="btn shopex-btn">!הירשם</button>
                            </div>
                            <p class="text-right text-blue">.בלחיצה על הרשמה אתה מסכים לתנאי המשתמש שלנו
                                <span class="font-weight-bold text-15">.תוכל לעיין בהם פה</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'PaymentRegisterModal',
        data(){
            return{

            }
        }
    }
</script>
