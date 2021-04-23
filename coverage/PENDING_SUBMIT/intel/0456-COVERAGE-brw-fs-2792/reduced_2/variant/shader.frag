#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

vec3 drawShape()
{
 if(gl_FragCoord.x < 1.0)
  {
   return vec3(1.0);
  }
 vec4 _GLF_outVarBackup_GLF_color;
 for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   _GLF_outVarBackup_GLF_color = vec4(1.0);
  }
 _GLF_color = _GLF_outVarBackup_GLF_color;
 return vec3(1.0);
}
void main()
{
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   drawShape();
  }
}
