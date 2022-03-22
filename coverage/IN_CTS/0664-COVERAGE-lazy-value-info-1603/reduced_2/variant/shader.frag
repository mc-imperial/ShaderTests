#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
void main()
{
 _GLF_color = vec4(1.0, 1.0, 1.0, 9.0);
 if(injectionSwitch.x < injectionSwitch.y)
  {
  }
 else
  {
   if(gl_FragCoord.x >= 1.0)
    {
     _GLF_color = vec4(1.0);
    }
   for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
     _GLF_color = vec4(1.0, 1.0, 1.0, 1.1);
     if(gl_FragCoord.y >= 1.0)
      {
       if(injectionSwitch.x < injectionSwitch.y)
        {
         _GLF_color = vec4(1.0);
        }
       else
        {
        }
      }
    }
  }
}
