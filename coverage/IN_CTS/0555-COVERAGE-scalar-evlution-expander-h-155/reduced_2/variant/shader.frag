#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
void main()
{
 for(int _injected_loop_counter = int(injectionSwitch.y); _injected_loop_counter != 0; _injected_loop_counter --)
  {
   if(int(gl_FragCoord.x) < 1)
    {
     _GLF_color = vec4(1.0, resolution.y, 1.0, 1.0);
    }
   else
    {
     for(int _injected_loop_counter = 1; _injected_loop_counter > 0; _injected_loop_counter --)
      {
       if(int(gl_FragCoord.x) < 1)
        {
         _GLF_color = vec4(1.0);
        }
       else
        {
         discard;
        }
      }
    }
  }
}
