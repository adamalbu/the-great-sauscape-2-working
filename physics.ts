// Add your code here
namespace physics{
    export function apply(){
        Sausage.ay = 350
        controller.moveSprite(Sausage, 100, 0)
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            if (Sausage.vy == 0){
                Sausage.vy = -150
            }
        })
    }

}