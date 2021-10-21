; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 148
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %128
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %12 "a"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_uint_values"
               OpName %17 ""
               OpName %25 "arr"
               OpName %28 "buf2"
               OpMemberName %28 0 "_GLF_uniform_float_values"
               OpName %30 ""
               OpName %66 "i"
               OpName %69 "buf1"
               OpMemberName %69 0 "_GLF_uniform_int_values"
               OpName %71 ""
               OpName %99 "ResType"
               OpName %104 "indexable"
               OpName %128 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 2
               OpDecorate %68 ArrayStride 16
               OpMemberDecorate %69 0 Offset 0
               OpDecorate %69 Block
               OpDecorate %71 DescriptorSet 0
               OpDecorate %71 Binding 1
               OpDecorate %128 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeInt 32 0
         %11 = OpTypePointer Function %10
         %13 = OpConstant %10 1
         %14 = OpTypeArray %10 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpTypePointer Uniform %10
         %21 = OpTypeFloat 32
         %22 = OpConstant %10 16
         %23 = OpTypeArray %21 %22
         %24 = OpTypePointer Function %23
         %26 = OpConstant %10 5
         %27 = OpTypeArray %21 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %21
         %65 = OpTypePointer Function %6
         %67 = OpConstant %10 3
         %68 = OpTypeArray %6 %67
         %69 = OpTypeStruct %68
         %70 = OpTypePointer Uniform %69
         %71 = OpVariable %70 Uniform
         %72 = OpTypePointer Uniform %6
         %80 = OpConstant %6 1
         %86 = OpConstant %6 2
         %89 = OpConstant %6 3
         %92 = OpConstant %6 4
         %99 = OpTypeStruct %10 %10
        %103 = OpTypePointer Function %27
        %105 = OpTypePointer Function %21
        %115 = OpTypeBool
        %126 = OpTypeVector %21 4
        %127 = OpTypePointer Output %126
        %128 = OpVariable %127 Output
        %147 = OpConstant %6 10
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %12 = OpVariable %11 Function
         %25 = OpVariable %24 Function
         %66 = OpVariable %65 Function
        %104 = OpVariable %103 Function
               OpStore %8 %9
         %19 = OpAccessChain %18 %17 %9 %9
         %20 = OpLoad %10 %19
               OpStore %12 %20
         %32 = OpAccessChain %31 %30 %9 %9
         %33 = OpLoad %21 %32
         %34 = OpAccessChain %31 %30 %9 %9
         %35 = OpLoad %21 %34
         %36 = OpAccessChain %31 %30 %9 %9
         %37 = OpLoad %21 %36
         %38 = OpAccessChain %31 %30 %9 %9
         %39 = OpLoad %21 %38
         %40 = OpAccessChain %31 %30 %9 %9
         %41 = OpLoad %21 %40
         %42 = OpAccessChain %31 %30 %9 %9
         %43 = OpLoad %21 %42
         %44 = OpAccessChain %31 %30 %9 %9
         %45 = OpLoad %21 %44
         %46 = OpAccessChain %31 %30 %9 %9
         %47 = OpLoad %21 %46
         %48 = OpAccessChain %31 %30 %9 %9
         %49 = OpLoad %21 %48
         %50 = OpAccessChain %31 %30 %9 %9
         %51 = OpLoad %21 %50
         %52 = OpAccessChain %31 %30 %9 %9
         %53 = OpLoad %21 %52
         %54 = OpAccessChain %31 %30 %9 %9
         %55 = OpLoad %21 %54
         %56 = OpAccessChain %31 %30 %9 %9
         %57 = OpLoad %21 %56
         %58 = OpAccessChain %31 %30 %9 %9
         %59 = OpLoad %21 %58
         %60 = OpAccessChain %31 %30 %9 %9
         %61 = OpLoad %21 %60
         %62 = OpAccessChain %31 %30 %9 %9
         %63 = OpLoad %21 %62
         %64 = OpCompositeConstruct %23 %33 %35 %37 %39 %41 %43 %45 %47 %49 %51 %53 %55 %57 %59 %61 %63
               OpStore %25 %64
         %73 = OpAccessChain %72 %71 %9 %9
         %74 = OpLoad %6 %73
               OpStore %66 %74
               OpBranch %75
         %75 = OpLabel
               OpLoopMerge %77 %78 None
               OpBranch %76
         %76 = OpLabel
         %79 = OpLoad %6 %66
         %81 = OpIAdd %6 %79 %80
               OpStore %66 %81
         %82 = OpAccessChain %31 %30 %9 %9
         %83 = OpLoad %21 %82
         %84 = OpAccessChain %31 %30 %9 %80
         %85 = OpLoad %21 %84
         %87 = OpAccessChain %31 %30 %9 %86
         %88 = OpLoad %21 %87
         %90 = OpAccessChain %31 %30 %9 %89
         %91 = OpLoad %21 %90
         %93 = OpAccessChain %31 %30 %9 %92
         %94 = OpLoad %21 %93
         %95 = OpCompositeConstruct %27 %83 %85 %88 %91 %94
         %96 = OpLoad %10 %12
         %97 = OpAccessChain %18 %17 %9 %9
         %98 = OpLoad %10 %97
        %100 = OpISubBorrow %99 %96 %98
        %101 = OpCompositeExtract %10 %100 1
               OpStore %12 %101
        %102 = OpCompositeExtract %10 %100 0
               OpStore %104 %95
        %106 = OpAccessChain %105 %104 %102
        %107 = OpLoad %21 %106
        %108 = OpAccessChain %105 %25 %79
        %109 = OpLoad %21 %108
        %110 = OpFAdd %21 %109 %107
        %111 = OpAccessChain %105 %25 %79
               OpStore %111 %110
               OpBranch %78
         %78 = OpLabel
        %112 = OpLoad %6 %66
        %113 = OpAccessChain %72 %71 %9 %9
        %114 = OpLoad %6 %113
        %116 = OpSLessThan %115 %112 %114
               OpBranchConditional %116 %75 %77
         %77 = OpLabel
        %117 = OpAccessChain %72 %71 %9 %9
        %118 = OpLoad %6 %117
        %119 = OpAccessChain %105 %25 %118
        %120 = OpLoad %21 %119
        %121 = OpAccessChain %31 %30 %9 %80
        %122 = OpLoad %21 %121
        %123 = OpFOrdEqual %115 %120 %122
               OpSelectionMerge %125 None
               OpBranchConditional %123 %124 %142
        %124 = OpLabel
        %129 = OpAccessChain %72 %71 %9 %9
        %130 = OpLoad %6 %129
        %131 = OpConvertSToF %21 %130
        %132 = OpAccessChain %72 %71 %9 %80
        %133 = OpLoad %6 %132
        %134 = OpConvertSToF %21 %133
        %135 = OpAccessChain %72 %71 %9 %80
        %136 = OpLoad %6 %135
        %137 = OpConvertSToF %21 %136
        %138 = OpAccessChain %72 %71 %9 %9
        %139 = OpLoad %6 %138
        %140 = OpConvertSToF %21 %139
        %141 = OpCompositeConstruct %126 %131 %134 %137 %140
               OpStore %128 %141
               OpBranch %125
        %142 = OpLabel
        %143 = OpAccessChain %72 %71 %9 %80
        %144 = OpLoad %6 %143
        %145 = OpConvertSToF %21 %144
        %146 = OpCompositeConstruct %126 %145 %145 %145 %145
               OpStore %128 %146
               OpBranch %125
        %125 = OpLabel
               OpReturn
               OpFunctionEnd
