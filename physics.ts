// Add your code here
namespace physics{
    export function apply(){
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            if (Sausage.vy == 0){
                Sausage.vy = -150
            }
        })
    }

}