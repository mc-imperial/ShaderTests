#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of GLF_live8injectionSwitch: [0.10967243, 0.7337323]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 GLF_live8injectionSwitch;
};
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

int _GLF_outlined_2()
{
 int GLF_live8_looplimiter0 = 1;
 do
  {
   _GLF_global_loop_count ++;
   if(GLF_live8_looplimiter0 >= 7)
    {
     break;
    }
   GLF_live8_looplimiter0 ++;
   vec4 _GLF_outVarBackup_GLF_color = vec4(1.0);
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(1.0, 1.0, 1.0, 5.5);
   if(gl_FragCoord.x >= 1.0)
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
 while((1 > int(GLF_live8injectionSwitch.x)) && (_GLF_global_loop_count < _GLF_global_loop_bound));
 return 1;
}
void main()
{
 _GLF_color = vec4(1.0);
 _GLF_outlined_2();
}
