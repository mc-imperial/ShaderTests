#version 320 es

precision highp float;

precision highp int;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 for(int _injected_loop_counter = int(injectionSwitch.y) & 1; _injected_loop_counter > 0; _injected_loop_counter --)
  {
   for(int _injected_loop_counter = 1; true; 1)
    {
     if(1.0 > injectionSwitch.y)
      {
       break;
      }
     _GLF_color = vec4(1.0);
    }
  }
}
