#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 for(int _injected_loop_counter = int(injectionSwitch.y); (_injected_loop_counter > 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
  {
   _GLF_global_loop_count ++;
   for(int _injected_loop_counter = int(injectionSwitch.y); (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
    {
     _GLF_global_loop_count ++;
     vec4 _GLF_outVarBackup_GLF_color;
     for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
      {
       _GLF_global_loop_count ++;
       _GLF_outVarBackup_GLF_color = _GLF_color;
      }
     _GLF_color = vec4(1.0);
     if(1.0 < injectionSwitch.y)
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
     if(gl_FragCoord.x >= 1.0)
      {
       _GLF_color = vec4(3.9, 1.0, 1.0, 1.0);
      }
     else
      {
      }
    }
  }
}
