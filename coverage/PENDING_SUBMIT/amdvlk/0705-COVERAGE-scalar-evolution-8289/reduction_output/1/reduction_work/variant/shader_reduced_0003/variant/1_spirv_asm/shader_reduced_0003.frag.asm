; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 77
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %61
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %11 "buf_push"
               OpMemberName %11 0 "one"
               OpName %13 ""
               OpName %23 "a"
               OpName %27 "buf0"
               OpMemberName %27 0 "_GLF_uniform_int_values"
               OpName %29 ""
               OpName %34 "i"
               OpName %61 "_GLF_color"
               OpMemberDecorate %11 0 Offset 0
               OpDecorate %11 Block
               OpDecorate %26 ArrayStride 16
               OpMemberDecorate %27 0 Offset 0
               OpDecorate %27 Block
               OpDecorate %29 DescriptorSet 0
               OpDecorate %29 Binding 0
               OpDecorate %61 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 1
         %10 = OpTypeInt 32 1
         %11 = OpTypeStruct %10
         %12 = OpTypePointer PushConstant %11
         %13 = OpVariable %12 PushConstant
         %14 = OpConstant %10 0
         %15 = OpTypePointer PushConstant %10
         %18 = OpTypeBool
         %22 = OpTypePointer Function %10
         %24 = OpTypeInt 32 0
         %25 = OpConstant %24 2
         %26 = OpTypeArray %10 %25
         %27 = OpTypeStruct %26
         %28 = OpTypePointer Uniform %27
         %29 = OpVariable %28 Uniform
         %30 = OpConstant %10 1
         %31 = OpTypePointer Uniform %10
         %43 = OpConstant %10 120
         %59 = OpTypeVector %6 4
         %60 = OpTypePointer Output %59
         %61 = OpVariable %60 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %23 = OpVariable %22 Function
         %34 = OpVariable %22 Function
               OpStore %8 %9
         %16 = OpAccessChain %15 %13 %14
         %17 = OpLoad %10 %16
         %19 = OpSGreaterThan %18 %17 %14
               OpSelectionMerge %21 None
               OpBranchConditional %19 %20 %21
         %20 = OpLabel
         %32 = OpAccessChain %31 %29 %14 %30
         %33 = OpLoad %10 %32
               OpStore %23 %33
         %35 = OpAccessChain %31 %29 %14 %14
         %36 = OpLoad %10 %35
               OpStore %34 %36
               OpBranch %37
         %37 = OpLabel
               OpLoopMerge %39 %40 None
               OpBranch %41
         %41 = OpLabel
         %42 = OpLoad %10 %34
         %44 = OpSLessThan %18 %42 %43
               OpBranchConditional %44 %38 %39
         %38 = OpLabel
         %45 = OpAccessChain %15 %13 %14
         %46 = OpLoad %10 %45
         %47 = OpLoad %10 %23
         %48 = OpIMul %10 %47 %46
               OpStore %23 %48
               OpBranch %40
         %40 = OpLabel
         %49 = OpLoad %10 %34
         %50 = OpIAdd %10 %49 %30
               OpStore %34 %50
               OpBranch %37
         %39 = OpLabel
         %51 = OpLoad %10 %23
         %52 = OpConvertSToF %6 %51
               OpStore %8 %52
               OpBranch %21
         %21 = OpLabel
         %53 = OpLoad %6 %8
         %54 = OpExtInst %6 %1 FMax %53 %9
               OpStore %8 %54
         %55 = OpLoad %6 %8
         %56 = OpFOrdEqual %18 %55 %9
               OpSelectionMerge %58 None
               OpBranchConditional %56 %57 %72
         %57 = OpLabel
         %62 = OpAccessChain %31 %29 %14 %14
         %63 = OpLoad %10 %62
         %64 = OpConvertSToF %6 %63
         %65 = OpAccessChain %31 %29 %14 %14
         %66 = OpLoad %10 %65
         %67 = OpConvertSToF %6 %66
         %68 = OpAccessChain %31 %29 %14 %30
         %69 = OpLoad %10 %68
         %70 = OpConvertSToF %6 %69
         %71 = OpCompositeConstruct %59 %9 %64 %67 %70
               OpStore %61 %71
               OpBranch %58
         %72 = OpLabel
         %73 = OpAccessChain %31 %29 %14 %14
         %74 = OpLoad %10 %73
         %75 = OpConvertSToF %6 %74
         %76 = OpCompositeConstruct %59 %75 %75 %75 %75
               OpStore %61 %76
               OpBranch %58
         %58 = OpLabel
               OpReturn
               OpFunctionEnd
