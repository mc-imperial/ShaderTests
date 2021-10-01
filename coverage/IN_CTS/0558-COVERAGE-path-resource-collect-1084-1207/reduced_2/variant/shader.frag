#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 1) uniform sampler2D tex;

void main()
{
 if(1.0 < injectionSwitch.y)
  {
   return;
  }
 else
  {
  }
 if(gl_FragCoord.x < 0.0)
  {
   if(gl_FragCoord.x < 0.0)
    {
     return;
    }
   for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
     if(gl_FragCoord.x < 1.0)
      {
       return;
      }
    }
  }
 _GLF_color = texture(tex, vec2(1.0));
}
