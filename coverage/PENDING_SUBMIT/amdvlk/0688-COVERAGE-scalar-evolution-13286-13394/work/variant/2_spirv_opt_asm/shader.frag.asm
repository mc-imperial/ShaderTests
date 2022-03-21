; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 123
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %45 %89
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %15 "buf1"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %45 "gl_FragCoord"
               OpName %51 "buf0"
               OpMemberName %51 0 "_GLF_uniform_float_values"
               OpName %53 ""
               OpName %89 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 1
               OpDecorate %45 BuiltIn FragCoord
               OpDecorate %50 ArrayStride 16
               OpMemberDecorate %51 0 Offset 0
               OpDecorate %51 Block
               OpDecorate %53 DescriptorSet 0
               OpDecorate %53 Binding 0
               OpDecorate %89 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 3
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpTypePointer Uniform %6
         %27 = OpConstant %6 10
         %28 = OpTypeBool
         %31 = OpConstant %6 1
         %42 = OpTypeFloat 32
         %43 = OpTypeVector %42 4
         %44 = OpTypePointer Input %43
         %45 = OpVariable %44 Input
         %46 = OpConstant %12 1
         %47 = OpTypePointer Input %42
         %50 = OpTypeArray %42 %46
         %51 = OpTypeStruct %50
         %52 = OpTypePointer Uniform %51
         %53 = OpVariable %52 Uniform
         %54 = OpTypePointer Uniform %42
         %64 = OpConstant %6 4
         %77 = OpConstant %6 2
         %88 = OpTypePointer Output %43
         %89 = OpVariable %88 Output
        %114 = OpConstant %12 0
        %115 = OpConstantFalse %28
        %116 = OpTypePointer Function %28
        %118 = OpConstantTrue %28
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %117 = OpVariable %116 Function %115
               OpSelectionMerge %112 None
               OpSwitch %114 %113
        %113 = OpLabel
               OpStore %8 %9
         %19 = OpAccessChain %18 %17 %9 %9
         %20 = OpLoad %6 %19
               OpBranch %21
         %21 = OpLabel
        %108 = OpPhi %6 %20 %113 %110 %24
         %26 = OpLoad %6 %8
         %29 = OpSLessThan %28 %26 %27
               OpLoopMerge %23 %24 None
               OpBranchConditional %29 %22 %23
         %22 = OpLabel
         %30 = OpLoad %6 %8
         %32 = OpIAdd %6 %30 %31
               OpStore %8 %32
               OpBranch %33
         %33 = OpLabel
        %111 = OpPhi %6 %108 %22 %62 %36
         %38 = OpLoad %6 %8
         %39 = OpSLessThan %28 %38 %27
               OpLoopMerge %35 %36 None
               OpBranchConditional %39 %34 %35
         %34 = OpLabel
         %40 = OpLoad %6 %8
         %41 = OpIAdd %6 %40 %31
               OpStore %8 %41
         %48 = OpAccessChain %47 %45 %46
         %49 = OpLoad %42 %48
         %55 = OpAccessChain %54 %53 %9 %9
         %56 = OpLoad %42 %55
         %57 = OpFOrdLessThan %28 %49 %56
               OpSelectionMerge %59 None
               OpBranchConditional %57 %58 %59
         %58 = OpLabel
               OpStore %117 %118
               OpBranch %35
         %59 = OpLabel
         %61 = OpAccessChain %18 %17 %9 %31
         %62 = OpLoad %6 %61
               OpBranch %36
         %36 = OpLabel
               OpBranch %33
         %35 = OpLabel
        %120 = OpLoad %28 %117
               OpSelectionMerge %119 None
               OpBranchConditional %120 %23 %119
        %119 = OpLabel
               OpBranch %65
         %65 = OpLabel
        %109 = OpPhi %6 %64 %119 %81 %66
        %110 = OpPhi %6 %111 %119 %79 %66
         %71 = OpSGreaterThanEqual %28 %109 %9
         %72 = OpLoad %6 %8
         %73 = OpSLessThan %28 %72 %27
         %74 = OpLogicalAnd %28 %71 %73
               OpLoopMerge %67 %66 None
               OpBranchConditional %74 %66 %67
         %66 = OpLabel
         %75 = OpLoad %6 %8
         %76 = OpIAdd %6 %75 %31
               OpStore %8 %76
         %78 = OpAccessChain %18 %17 %9 %77
         %79 = OpLoad %6 %78
         %81 = OpISub %6 %109 %31
               OpBranch %65
         %67 = OpLabel
               OpBranch %24
         %24 = OpLabel
               OpBranch %21
         %23 = OpLabel
        %122 = OpLoad %28 %117
               OpSelectionMerge %121 None
               OpBranchConditional %122 %112 %121
        %121 = OpLabel
         %83 = OpAccessChain %18 %17 %9 %31
         %84 = OpLoad %6 %83
         %85 = OpIEqual %28 %108 %84
               OpSelectionMerge %87 None
               OpBranchConditional %85 %86 %103
         %86 = OpLabel
         %92 = OpConvertSToF %42 %84
         %95 = OpConvertSToF %42 %20
        %102 = OpCompositeConstruct %43 %92 %95 %95 %92
               OpStore %89 %102
               OpBranch %87
        %103 = OpLabel
        %106 = OpConvertSToF %42 %20
        %107 = OpCompositeConstruct %43 %106 %106 %106 %106
               OpStore %89 %107
               OpBranch %87
         %87 = OpLabel
               OpStore %117 %118
               OpBranch %112
        %112 = OpLabel
               OpReturn
               OpFunctionEnd
