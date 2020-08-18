/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package  io.cloudoffice.platform.cockpit.mqtt;
import io.cloudoffice.platform.cockpit.api.WSMessageListener;
import org.eclipse.paho.client.mqttv3.IMqttMessageListener;
import org.eclipse.paho.client.mqttv3.MqttMessage;


public class MqttMessageListener implements IMqttMessageListener{

    public WSMessageListener getListener() {
        return listener;
    }

    public void setListener(WSMessageListener listener) {
        this.listener = listener;
    }
    
    private WSMessageListener listener = null;
    
    @Override
    public void messageArrived(String topic, MqttMessage message) throws Exception {

        final byte[] payload = message.getPayload();
        final String messageString = new String(payload);
        getListener().onMessage(messageString);
    }
}
