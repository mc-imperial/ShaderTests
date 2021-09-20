#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   for(int _injected_loop_counter = int(clamp(ivec4(1, 1, int(injectionSwitch.y), 1), ivec4(1), ivec4(1))); (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
    }
   _GLF_color = vec4(1.0);
  }
}
