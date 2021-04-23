; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 78
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %59
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %31 "f"
               OpName %39 "buf0"
               OpMemberName %39 0 "_GLF_uniform_float_values"
               OpName %41 ""
               OpName %59 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %38 ArrayStride 16
               OpMemberDecorate %39 0 Offset 0
               OpDecorate %39 Block
               OpDecorate %41 DescriptorSet 0
               OpDecorate %41 Binding 0
               OpDecorate %59 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 2
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpTypePointer Uniform %10
         %25 = OpConstant %6 -621.596008
         %30 = OpTypePointer Function %6
         %36 = OpTypeBool
         %38 = OpTypeArray %6 %12
         %39 = OpTypeStruct %38
         %40 = OpTypePointer Uniform %39
         %41 = OpVariable %40 Uniform
         %42 = OpTypePointer Uniform %6
         %50 = OpConstant %10 1
         %58 = OpTypePointer Output %7
         %59 = OpVariable %58 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %31 = OpVariable %30 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %10 %19
         %21 = OpConvertSToF %6 %20
         %22 = OpAccessChain %18 %16 %17 %17
         %23 = OpLoad %10 %22
         %24 = OpConvertSToF %6 %23
         %26 = OpAccessChain %18 %16 %17 %17
         %27 = OpLoad %10 %26
         %28 = OpConvertSToF %6 %27
         %29 = OpCompositeConstruct %7 %21 %24 %25 %28
               OpStore %9 %29
         %32 = OpLoad %7 %9
         %33 = OpExtInst %7 %1 Trunc %32
         %34 = OpExtInst %7 %1 Atan %33
         %35 = OpCompositeExtract %6 %34 2
               OpStore %31 %35
         %37 = OpLoad %6 %31
         %43 = OpAccessChain %42 %41 %17 %17
         %44 = OpLoad %6 %43
         %45 = OpFNegate %6 %44
         %46 = OpFOrdGreaterThan %36 %37 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %48
         %47 = OpLabel
         %49 = OpLoad %6 %31
         %51 = OpAccessChain %42 %41 %17 %50
         %52 = OpLoad %6 %51
         %53 = OpFNegate %6 %52
         %54 = OpFOrdLessThan %36 %49 %53
               OpBranch %48
         %48 = OpLabel
         %55 = OpPhi %36 %46 %5 %54 %47
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %73
         %56 = OpLabel
         %60 = OpAccessChain %18 %16 %17 %50
         %61 = OpLoad %10 %60
         %62 = OpConvertSToF %6 %61
         %63 = OpAccessChain %18 %16 %17 %17
         %64 = OpLoad %10 %63
         %65 = OpConvertSToF %6 %64
         %66 = OpAccessChain %18 %16 %17 %17
         %67 = OpLoad %10 %66
         %68 = OpConvertSToF %6 %67
         %69 = OpAccessChain %18 %16 %17 %50
         %70 = OpLoad %10 %69
         %71 = OpConvertSToF %6 %70
         %72 = OpCompositeConstruct %7 %62 %65 %68 %71
               OpStore %59 %72
               OpBranch %57
         %73 = OpLabel
         %74 = OpAccessChain %18 %16 %17 %17
         %75 = OpLoad %10 %74
         %76 = OpConvertSToF %6 %75
         %77 = OpCompositeConstruct %7 %76 %76 %76 %76
               OpStore %59 %77
               OpBranch %57
         %57 = OpLabel
               OpReturn
               OpFunctionEnd
