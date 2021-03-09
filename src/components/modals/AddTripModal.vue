<template>
  <div id="modal-startTrip">

        <div class="modal-content">
          <center>
            <div class="modal-header" style="grid-template-columns: 1fr;">
              <span></span>

              <h5 class="selected">Add Trip</h5>
              <span></span>
            </div>
            <div style="padding: 10px;">
              <div class="row">
                <span></span>
                <p> MEOW </p>

                <div style="padding: 10px;">
                  <div class="row">
                    <div class="titleAndMile">
                    
                      <div>
                        <input
                          id="points"
                          name="points"
                          required
                          autocomplete="off"
                          type="number"
                          pattern="[0-9]*"
                          min="0"
                          max="9999"
                          placeholder="WRF"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <button
                  class="btn btn-wide"
                >AB C</button>
              </div>
            </div>
          </center>
        </div>
      </div>  </div>
</template>

<script>
import * as ModernModals from "modern-modals";

export default {
  name: "AddTripModal",
  data() {
    return {
      modal: null,
    };
  },
  mounted() {
    window.ModernModals = ModernModals;
    this.$data.modal = new ModernModals.HTMLModal(
      document.getElementById("modal-startTrip")
    );
  },
};
</script>

<style>
</style>