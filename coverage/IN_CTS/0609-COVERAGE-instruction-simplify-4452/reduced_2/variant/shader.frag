#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

struct _GLF_struct_126 {
 vec4 _GLF_outVarBackup_GLF_color;
} ;

struct _GLF_struct_127 {
 _GLF_struct_126 _f0;
 uvec3 _f1;
} ;

precision highp int;

precision highp float;

void quicksort()
{
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   _GLF_struct_127 _GLF_struct_replacement_127;
   _GLF_struct_replacement_127._f0._GLF_outVarBackup_GLF_color = vec4(1.0);
  }
}
void main()
{
 quicksort();
}
