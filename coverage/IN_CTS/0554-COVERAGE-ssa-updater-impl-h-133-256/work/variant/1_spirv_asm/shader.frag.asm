; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 106
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %43 %48
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func(f1;"
               OpName %9 "x"
               OpName %14 "_GLF_global_loop_count"
               OpName %16 "f"
               OpName %33 "buf0"
               OpMemberName %33 0 "_GLF_uniform_float_values"
               OpName %35 ""
               OpName %43 "_GLF_color"
               OpName %48 "gl_FragCoord"
               OpName %87 "v"
               OpName %91 "param"
               OpDecorate %32 ArrayStride 16
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 0
               OpDecorate %43 Location 0
               OpDecorate %48 BuiltIn FragCoord
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %6 %7
         %12 = OpTypeInt 32 1
         %13 = OpTypePointer Private %12
         %14 = OpVariable %13 Private
         %15 = OpConstant %12 0
         %17 = OpConstant %6 1
         %24 = OpConstant %12 10
         %25 = OpTypeBool
         %28 = OpConstant %12 1
         %30 = OpTypeInt 32 0
         %31 = OpConstant %30 2
         %32 = OpTypeArray %6 %31
         %33 = OpTypeStruct %32
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpTypePointer Uniform %6
         %41 = OpTypeVector %6 4
         %42 = OpTypePointer Output %41
         %43 = OpVariable %42 Output
         %47 = OpTypePointer Input %41
         %48 = OpVariable %47 Input
         %49 = OpConstant %30 0
         %50 = OpTypePointer Input %6
         %74 = OpConstant %6 0.100000001
         %79 = OpConstant %30 1
         %86 = OpTypePointer Function %41
         %95 = OpConstant %30 3
        %100 = OpConstant %6 0
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %87 = OpVariable %86 Function
         %91 = OpVariable %7 Function
               OpStore %14 %15
         %72 = OpAccessChain %50 %48 %49
         %73 = OpLoad %6 %72
         %75 = OpFOrdLessThan %25 %73 %74
               OpSelectionMerge %77 None
               OpBranchConditional %75 %76 %77
         %76 = OpLabel
               OpReturn
         %77 = OpLabel
         %80 = OpAccessChain %50 %48 %79
         %81 = OpLoad %6 %80
         %82 = OpFOrdLessThan %25 %81 %74
               OpSelectionMerge %84 None
               OpBranchConditional %82 %83 %84
         %83 = OpLabel
               OpReturn
         %84 = OpLabel
         %88 = OpAccessChain %36 %35 %15 %28
         %89 = OpLoad %6 %88
         %90 = OpCompositeConstruct %41 %89 %89 %89 %89
               OpStore %87 %90
         %92 = OpAccessChain %50 %48 %79
         %93 = OpLoad %6 %92
               OpStore %91 %93
         %94 = OpFunctionCall %6 %10 %91
         %96 = OpAccessChain %7 %87 %95
               OpStore %96 %94
         %97 = OpAccessChain %7 %87 %49
               OpStore %97 %94
         %98 = OpAccessChain %50 %48 %49
         %99 = OpLoad %6 %98
        %101 = OpFOrdLessThan %25 %99 %100
               OpSelectionMerge %103 None
               OpBranchConditional %101 %102 %103
        %102 = OpLabel
               OpReturn
        %103 = OpLabel
        %105 = OpLoad %41 %87
               OpStore %43 %105
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %6 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
         %16 = OpVariable %7 Function
               OpStore %16 %17
               OpBranch %18
         %18 = OpLabel
               OpLoopMerge %20 %21 None
               OpBranch %22
         %22 = OpLabel
         %23 = OpLoad %12 %14
         %26 = OpSLessThan %25 %23 %24
               OpBranchConditional %26 %19 %20
         %19 = OpLabel
         %27 = OpLoad %12 %14
         %29 = OpIAdd %12 %27 %28
               OpStore %14 %29
         %37 = OpAccessChain %36 %35 %15 %15
         %38 = OpLoad %6 %37
         %39 = OpLoad %6 %16
         %40 = OpFAdd %6 %39 %38
               OpStore %16 %40
         %44 = OpAccessChain %36 %35 %15 %28
         %45 = OpLoad %6 %44
         %46 = OpCompositeConstruct %41 %45 %45 %45 %45
               OpStore %43 %46
         %51 = OpAccessChain %50 %48 %49
         %52 = OpLoad %6 %51
         %53 = OpAccessChain %36 %35 %15 %28
         %54 = OpLoad %6 %53
         %55 = OpFOrdGreaterThanEqual %25 %52 %54
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %57
         %56 = OpLabel
         %58 = OpAccessChain %36 %35 %15 %15
         %59 = OpLoad %6 %58
         %60 = OpCompositeConstruct %41 %59 %59 %59 %59
               OpStore %43 %60
               OpBranch %57
         %57 = OpLabel
         %61 = OpLoad %6 %9
         %62 = OpAccessChain %36 %35 %15 %28
         %63 = OpLoad %6 %62
         %64 = OpFOrdLessThan %25 %61 %63
               OpSelectionMerge %66 None
               OpBranchConditional %64 %65 %66
         %65 = OpLabel
         %67 = OpLoad %6 %16
               OpReturnValue %67
         %66 = OpLabel
               OpBranch %21
         %21 = OpLabel
               OpBranch %18
         %20 = OpLabel
         %69 = OpLoad %6 %16
               OpReturnValue %69
               OpFunctionEnd
