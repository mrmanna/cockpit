/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import java.util.List;

public interface Signal {
    
  String  getFilter();
  List<Object> getPackets();
  String getAction();
  Source getSource();
}
