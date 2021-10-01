; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 160
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %35 %71
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func(f1;"
               OpName %9 "x"
               OpName %14 "_GLF_global_loop_count"
               OpName %16 "f"
               OpName %20 "buf1"
               OpMemberName %20 0 "_GLF_uniform_float_values"
               OpName %22 ""
               OpName %35 "gl_FragCoord"
               OpName %71 "_GLF_color"
               OpName %97 "buf0"
               OpMemberName %97 0 "_GLF_uniform_int_values"
               OpName %99 ""
               OpName %114 "v0"
               OpName %133 "v1"
               OpName %137 "param"
               OpDecorate %19 ArrayStride 16
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %22 DescriptorSet 0
               OpDecorate %22 Binding 1
               OpDecorate %35 BuiltIn FragCoord
               OpDecorate %71 Location 0
               OpDecorate %96 ArrayStride 16
               OpMemberDecorate %97 0 Offset 0
               OpDecorate %97 Block
               OpDecorate %99 DescriptorSet 0
               OpDecorate %99 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %6 %7
         %12 = OpTypeInt 32 1
         %13 = OpTypePointer Private %12
         %14 = OpVariable %13 Private
         %15 = OpConstant %12 0
         %17 = OpTypeInt 32 0
         %18 = OpConstant %17 3
         %19 = OpTypeArray %6 %18
         %20 = OpTypeStruct %19
         %21 = OpTypePointer Uniform %20
         %22 = OpVariable %21 Uniform
         %23 = OpTypePointer Uniform %6
         %28 = OpConstant %6 1
         %29 = OpTypeBool
         %33 = OpTypeVector %6 4
         %34 = OpTypePointer Input %33
         %35 = OpVariable %34 Input
         %36 = OpConstant %17 0
         %37 = OpTypePointer Input %6
         %40 = OpConstant %12 2
         %55 = OpConstant %12 10
         %58 = OpConstant %12 1
         %66 = OpConstant %6 0
         %70 = OpTypePointer Output %33
         %71 = OpVariable %70 Output
         %95 = OpConstant %17 1
         %96 = OpTypeArray %12 %95
         %97 = OpTypeStruct %96
         %98 = OpTypePointer Uniform %97
         %99 = OpVariable %98 Uniform
        %100 = OpTypePointer Uniform %12
        %113 = OpTypePointer Function %33
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %114 = OpVariable %113 Function
        %133 = OpVariable %113 Function
        %137 = OpVariable %7 Function
               OpStore %14 %15
        %101 = OpAccessChain %100 %99 %15 %15
        %102 = OpLoad %12 %101
        %103 = OpConvertSToF %6 %102
        %104 = OpCompositeConstruct %33 %103 %103 %103 %103
               OpStore %71 %104
        %105 = OpAccessChain %37 %35 %36
        %106 = OpLoad %6 %105
        %107 = OpAccessChain %23 %22 %15 %58
        %108 = OpLoad %6 %107
        %109 = OpFOrdLessThan %29 %106 %108
               OpSelectionMerge %111 None
               OpBranchConditional %109 %110 %111
        %110 = OpLabel
               OpReturn
        %111 = OpLabel
        %115 = OpLoad %33 %71
               OpStore %114 %115
        %116 = OpAccessChain %37 %35 %36
        %117 = OpLoad %6 %116
        %118 = OpFOrdGreaterThanEqual %29 %117 %66
               OpSelectionMerge %120 None
               OpBranchConditional %118 %119 %120
        %119 = OpLabel
        %121 = OpAccessChain %23 %22 %15 %15
        %122 = OpLoad %6 %121
        %123 = OpCompositeConstruct %33 %122 %122 %122 %122
               OpStore %71 %123
               OpBranch %120
        %120 = OpLabel
        %124 = OpLoad %33 %114
               OpStore %71 %124
        %125 = OpAccessChain %37 %35 %95
        %126 = OpLoad %6 %125
        %127 = OpAccessChain %23 %22 %15 %58
        %128 = OpLoad %6 %127
        %129 = OpFOrdLessThan %29 %126 %128
               OpSelectionMerge %131 None
               OpBranchConditional %129 %130 %131
        %130 = OpLabel
               OpReturn
        %131 = OpLabel
        %134 = OpAccessChain %23 %22 %15 %40
        %135 = OpLoad %6 %134
        %136 = OpCompositeConstruct %33 %135 %135 %135 %135
               OpStore %133 %136
        %138 = OpAccessChain %37 %35 %95
        %139 = OpLoad %6 %138
               OpStore %137 %139
        %140 = OpFunctionCall %6 %10 %137
        %141 = OpAccessChain %7 %133 %18
               OpStore %141 %140
        %142 = OpAccessChain %7 %133 %36
               OpStore %142 %140
        %143 = OpAccessChain %37 %35 %36
        %144 = OpLoad %6 %143
        %145 = OpFOrdGreaterThanEqual %29 %144 %66
               OpSelectionMerge %147 None
               OpBranchConditional %145 %146 %147
        %146 = OpLabel
        %148 = OpAccessChain %23 %22 %15 %15
        %149 = OpLoad %6 %148
        %150 = OpCompositeConstruct %33 %149 %149 %149 %149
               OpStore %71 %150
               OpBranch %147
        %147 = OpLabel
        %151 = OpAccessChain %37 %35 %36
        %152 = OpLoad %6 %151
        %153 = OpAccessChain %23 %22 %15 %40
        %154 = OpLoad %6 %153
        %155 = OpFOrdLessThan %29 %152 %154
               OpSelectionMerge %157 None
               OpBranchConditional %155 %156 %157
        %156 = OpLabel
               OpReturn
        %157 = OpLabel
        %159 = OpLoad %33 %133
               OpStore %71 %159
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %6 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
         %16 = OpVariable %7 Function
         %24 = OpAccessChain %23 %22 %15 %15
         %25 = OpLoad %6 %24
               OpStore %16 %25
         %26 = OpAccessChain %23 %22 %15 %15
         %27 = OpLoad %6 %26
         %30 = OpFOrdLessThan %29 %27 %28
               OpSelectionMerge %32 None
               OpBranchConditional %30 %31 %32
         %31 = OpLabel
         %38 = OpAccessChain %37 %35 %36
         %39 = OpLoad %6 %38
         %41 = OpAccessChain %23 %22 %15 %40
         %42 = OpLoad %6 %41
         %43 = OpFOrdLessThan %29 %39 %42
               OpSelectionMerge %45 None
               OpBranchConditional %43 %44 %45
         %44 = OpLabel
         %46 = OpAccessChain %23 %22 %15 %15
         %47 = OpLoad %6 %46
               OpReturnValue %47
         %45 = OpLabel
               OpBranch %32
         %32 = OpLabel
               OpBranch %49
         %49 = OpLabel
               OpLoopMerge %51 %52 None
               OpBranch %53
         %53 = OpLabel
         %54 = OpLoad %12 %14
         %56 = OpSLessThan %29 %54 %55
               OpBranchConditional %56 %50 %51
         %50 = OpLabel
         %57 = OpLoad %12 %14
         %59 = OpIAdd %12 %57 %58
               OpStore %14 %59
         %60 = OpAccessChain %23 %22 %15 %15
         %61 = OpLoad %6 %60
         %62 = OpLoad %6 %16
         %63 = OpFAdd %6 %62 %61
               OpStore %16 %63
         %64 = OpAccessChain %37 %35 %36
         %65 = OpLoad %6 %64
         %67 = OpFOrdGreaterThanEqual %29 %65 %66
               OpSelectionMerge %69 None
               OpBranchConditional %67 %68 %69
         %68 = OpLabel
         %72 = OpAccessChain %23 %22 %15 %15
         %73 = OpLoad %6 %72
         %74 = OpCompositeConstruct %33 %73 %73 %73 %73
               OpStore %71 %74
               OpBranch %69
         %69 = OpLabel
         %75 = OpLoad %6 %9
         %76 = OpAccessChain %23 %22 %15 %40
         %77 = OpLoad %6 %76
         %78 = OpFOrdLessThan %29 %75 %77
               OpSelectionMerge %80 None
               OpBranchConditional %78 %79 %80
         %79 = OpLabel
         %81 = OpLoad %6 %16
               OpReturnValue %81
         %80 = OpLabel
               OpBranch %52
         %52 = OpLabel
               OpBranch %49
         %51 = OpLabel
               OpBranch %83
         %83 = OpLabel
               OpLoopMerge %85 %86 None
               OpBranch %87
         %87 = OpLabel
         %88 = OpLoad %12 %14
         %89 = OpSLessThan %29 %88 %55
               OpBranchConditional %89 %84 %85
         %84 = OpLabel
         %90 = OpLoad %12 %14
         %91 = OpIAdd %12 %90 %58
               OpStore %14 %91
               OpBranch %86
         %86 = OpLabel
               OpBranch %83
         %85 = OpLabel
         %92 = OpLoad %6 %16
               OpReturnValue %92
               OpFunctionEnd
