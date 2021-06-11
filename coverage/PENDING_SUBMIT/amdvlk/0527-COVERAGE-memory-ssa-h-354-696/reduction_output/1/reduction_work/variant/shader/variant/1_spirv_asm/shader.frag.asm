; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 141
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %122
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %15 "arr"
               OpName %18 "buf1"
               OpMemberName %18 0 "_GLF_uniform_float_values"
               OpName %20 ""
               OpName %64 "buf0"
               OpMemberName %64 0 "_GLF_uniform_int_values"
               OpName %66 ""
               OpName %79 "a"
               OpName %87 "buf2"
               OpMemberName %87 0 "two"
               OpName %89 ""
               OpName %122 "_GLF_color"
               OpDecorate %17 ArrayStride 16
               OpMemberDecorate %18 0 Offset 0
               OpDecorate %18 Block
               OpDecorate %20 DescriptorSet 0
               OpDecorate %20 Binding 1
               OpDecorate %63 ArrayStride 16
               OpMemberDecorate %64 0 Offset 0
               OpDecorate %64 Block
               OpDecorate %66 DescriptorSet 0
               OpDecorate %66 Binding 0
               OpMemberDecorate %87 0 Offset 0
               OpDecorate %87 Block
               OpDecorate %89 DescriptorSet 0
               OpDecorate %89 Binding 2
               OpDecorate %122 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 9
         %13 = OpTypeArray %10 %12
         %14 = OpTypePointer Function %13
         %16 = OpConstant %11 3
         %17 = OpTypeArray %10 %16
         %18 = OpTypeStruct %17
         %19 = OpTypePointer Uniform %18
         %20 = OpVariable %19 Uniform
         %21 = OpTypePointer Uniform %10
         %47 = OpConstant %6 10
         %48 = OpTypeBool
         %51 = OpConstant %6 1
         %62 = OpConstant %11 4
         %63 = OpTypeArray %6 %62
         %64 = OpTypeStruct %63
         %65 = OpTypePointer Uniform %64
         %66 = OpVariable %65 Uniform
         %67 = OpConstant %6 2
         %68 = OpTypePointer Uniform %6
         %73 = OpTypePointer Function %10
         %78 = OpTypePointer Function %6
         %87 = OpTypeStruct %10
         %88 = OpTypePointer Uniform %87
         %89 = OpVariable %88 Uniform
        %101 = OpConstant %6 3
        %120 = OpTypeVector %10 4
        %121 = OpTypePointer Output %120
        %122 = OpVariable %121 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %15 = OpVariable %14 Function
         %79 = OpVariable %78 Function
               OpStore %8 %9
         %22 = OpAccessChain %21 %20 %9 %9
         %23 = OpLoad %10 %22
         %24 = OpAccessChain %21 %20 %9 %9
         %25 = OpLoad %10 %24
         %26 = OpAccessChain %21 %20 %9 %9
         %27 = OpLoad %10 %26
         %28 = OpAccessChain %21 %20 %9 %9
         %29 = OpLoad %10 %28
         %30 = OpAccessChain %21 %20 %9 %9
         %31 = OpLoad %10 %30
         %32 = OpAccessChain %21 %20 %9 %9
         %33 = OpLoad %10 %32
         %34 = OpAccessChain %21 %20 %9 %9
         %35 = OpLoad %10 %34
         %36 = OpAccessChain %21 %20 %9 %9
         %37 = OpLoad %10 %36
         %38 = OpAccessChain %21 %20 %9 %9
         %39 = OpLoad %10 %38
         %40 = OpCompositeConstruct %13 %23 %25 %27 %29 %31 %33 %35 %37 %39
               OpStore %15 %40
               OpBranch %41
         %41 = OpLabel
               OpLoopMerge %43 %44 None
               OpBranch %45
         %45 = OpLabel
         %46 = OpLoad %6 %8
         %49 = OpSLessThan %48 %46 %47
               OpBranchConditional %49 %42 %43
         %42 = OpLabel
         %50 = OpLoad %6 %8
         %52 = OpIAdd %6 %50 %51
               OpStore %8 %52
               OpBranch %53
         %53 = OpLabel
               OpLoopMerge %55 %56 None
               OpBranch %57
         %57 = OpLabel
         %58 = OpLoad %6 %8
         %59 = OpSLessThan %48 %58 %47
               OpBranchConditional %59 %54 %55
         %54 = OpLabel
         %60 = OpLoad %6 %8
         %61 = OpIAdd %6 %60 %51
               OpStore %8 %61
         %69 = OpAccessChain %68 %66 %9 %67
         %70 = OpLoad %6 %69
         %71 = OpAccessChain %21 %20 %9 %9
         %72 = OpLoad %10 %71
         %74 = OpAccessChain %73 %15 %70
         %75 = OpLoad %10 %74
         %76 = OpFAdd %10 %75 %72
         %77 = OpAccessChain %73 %15 %70
               OpStore %77 %76
         %80 = OpAccessChain %68 %66 %9 %9
         %81 = OpLoad %6 %80
               OpStore %79 %81
               OpBranch %82
         %82 = OpLabel
               OpLoopMerge %84 %85 None
               OpBranch %86
         %86 = OpLabel
         %90 = OpAccessChain %21 %89 %9
         %91 = OpLoad %10 %90
         %92 = OpAccessChain %21 %20 %9 %51
         %93 = OpLoad %10 %92
         %94 = OpFOrdGreaterThan %48 %91 %93
         %95 = OpLoad %6 %8
         %96 = OpSLessThan %48 %95 %47
         %97 = OpLogicalAnd %48 %94 %96
               OpBranchConditional %97 %83 %84
         %83 = OpLabel
         %98 = OpLoad %6 %8
         %99 = OpIAdd %6 %98 %51
               OpStore %8 %99
        %100 = OpLoad %6 %79
        %102 = OpAccessChain %68 %66 %9 %101
        %103 = OpLoad %6 %102
        %104 = OpSGreaterThan %48 %100 %103
               OpSelectionMerge %106 None
               OpBranchConditional %104 %105 %106
        %105 = OpLabel
               OpBranch %84
        %106 = OpLabel
        %108 = OpLoad %6 %79
        %109 = OpIAdd %6 %108 %51
               OpStore %79 %109
               OpBranch %85
         %85 = OpLabel
               OpBranch %82
         %84 = OpLabel
               OpBranch %56
         %56 = OpLabel
               OpBranch %53
         %55 = OpLabel
               OpBranch %44
         %44 = OpLabel
               OpBranch %41
         %43 = OpLabel
        %110 = OpAccessChain %21 %89 %9
        %111 = OpLoad %10 %110
        %112 = OpConvertFToS %6 %111
        %113 = OpAccessChain %73 %15 %112
        %114 = OpLoad %10 %113
        %115 = OpAccessChain %21 %20 %9 %67
        %116 = OpLoad %10 %115
        %117 = OpFOrdEqual %48 %114 %116
               OpSelectionMerge %119 None
               OpBranchConditional %117 %118 %136
        %118 = OpLabel
        %123 = OpAccessChain %68 %66 %9 %9
        %124 = OpLoad %6 %123
        %125 = OpConvertSToF %10 %124
        %126 = OpAccessChain %68 %66 %9 %51
        %127 = OpLoad %6 %126
        %128 = OpConvertSToF %10 %127
        %129 = OpAccessChain %68 %66 %9 %51
        %130 = OpLoad %6 %129
        %131 = OpConvertSToF %10 %130
        %132 = OpAccessChain %68 %66 %9 %9
        %133 = OpLoad %6 %132
        %134 = OpConvertSToF %10 %133
        %135 = OpCompositeConstruct %120 %125 %128 %131 %134
               OpStore %122 %135
               OpBranch %119
        %136 = OpLabel
        %137 = OpAccessChain %68 %66 %9 %51
        %138 = OpLoad %6 %137
        %139 = OpConvertSToF %10 %138
        %140 = OpCompositeConstruct %120 %139 %139 %139 %139
               OpStore %122 %140
               OpBranch %119
        %119 = OpLabel
               OpReturn
               OpFunctionEnd
