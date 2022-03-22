; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 80
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %61
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %11 "_GLF_global_loop_count"
               OpName %14 "a"
               OpName %16 "i"
               OpName %31 "buf0"
               OpMemberName %31 0 "_GLF_uniform_int_values"
               OpName %33 ""
               OpName %61 "_GLF_color"
               OpDecorate %30 ArrayStride 16
               OpMemberDecorate %31 0 Offset 0
               OpDecorate %31 Block
               OpDecorate %33 DescriptorSet 0
               OpDecorate %33 Binding 0
               OpDecorate %61 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypePointer Private %6
         %11 = OpVariable %10 Private
         %12 = OpConstant %6 0
         %13 = OpTypePointer Function %6
         %15 = OpConstant %6 1
         %23 = OpConstant %6 10
         %24 = OpTypeBool
         %28 = OpTypeInt 32 0
         %29 = OpConstant %28 2
         %30 = OpTypeArray %6 %29
         %31 = OpTypeStruct %30
         %32 = OpTypePointer Uniform %31
         %33 = OpVariable %32 Uniform
         %34 = OpTypePointer Uniform %6
         %48 = OpConstant %6 2
         %58 = OpTypeFloat 32
         %59 = OpTypeVector %58 4
         %60 = OpTypePointer Output %59
         %61 = OpVariable %60 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %11 %12
         %54 = OpFunctionCall %6 %8
         %55 = OpIEqual %24 %54 %23
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %75
         %56 = OpLabel
         %62 = OpAccessChain %34 %33 %12 %12
         %63 = OpLoad %6 %62
         %64 = OpConvertSToF %58 %63
         %65 = OpAccessChain %34 %33 %12 %15
         %66 = OpLoad %6 %65
         %67 = OpConvertSToF %58 %66
         %68 = OpAccessChain %34 %33 %12 %15
         %69 = OpLoad %6 %68
         %70 = OpConvertSToF %58 %69
         %71 = OpAccessChain %34 %33 %12 %12
         %72 = OpLoad %6 %71
         %73 = OpConvertSToF %58 %72
         %74 = OpCompositeConstruct %59 %64 %67 %70 %73
               OpStore %61 %74
               OpBranch %57
         %75 = OpLabel
         %76 = OpAccessChain %34 %33 %12 %15
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %58 %77
         %79 = OpCompositeConstruct %59 %78 %78 %78 %78
               OpStore %61 %79
               OpBranch %57
         %57 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %14 = OpVariable %13 Function
         %16 = OpVariable %13 Function
               OpStore %14 %15
               OpStore %16 %15
               OpBranch %17
         %17 = OpLabel
               OpLoopMerge %19 %20 None
               OpBranch %21
         %21 = OpLabel
         %22 = OpLoad %6 %11
         %25 = OpSLessThan %24 %22 %23
               OpBranchConditional %25 %18 %19
         %18 = OpLabel
         %26 = OpLoad %6 %11
         %27 = OpIAdd %6 %26 %15
               OpStore %11 %27
         %35 = OpAccessChain %34 %33 %12 %12
         %36 = OpLoad %6 %35
               OpStore %16 %36
               OpBranch %37
         %37 = OpLabel
               OpLoopMerge %39 %40 None
               OpBranch %41
         %41 = OpLabel
         %42 = OpLoad %6 %11
         %43 = OpSLessThan %24 %42 %23
               OpBranchConditional %43 %38 %39
         %38 = OpLabel
         %44 = OpLoad %6 %11
         %45 = OpIAdd %6 %44 %15
               OpStore %11 %45
         %46 = OpLoad %6 %16
         %47 = OpIAdd %6 %46 %15
               OpStore %16 %47
               OpBranch %40
         %40 = OpLabel
         %49 = OpLoad %6 %14
         %50 = OpIMul %6 %48 %49
               OpBranch %37
         %39 = OpLabel
               OpBranch %20
         %20 = OpLabel
               OpBranch %17
         %19 = OpLabel
         %51 = OpLoad %6 %16
               OpReturnValue %51
               OpFunctionEnd
